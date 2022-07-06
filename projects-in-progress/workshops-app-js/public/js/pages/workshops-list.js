import {
    fetchWorkshops,
    deleteWorkshop
} from '../services/workshops.js';

let page = 1;

const showWorkshops = ( workshops ) => {
    const workshopsListEl = document.querySelector( '.workshops-list' );

    let workshopsListStr = '';

    workshops.forEach(
        workshop => {
            const {
                imageUrl,
                name,
                startDate,
                endDate,
                time,
                description,
                id
            } = workshop;

            const workshopStr = `
                <div class="workshops-list-item" data-id="${workshop.id}">
                    <a class="link-plain" href="/workshop-details.html">
                        <img src="${imageUrl}" alt="${name}" class="img-responsive img-workshop" />
                        <div class="workshop-title mt-3 mb-3">
                            ${name}
                        </div>
                        <div class="workshop-date mt-2 mb-2">
                            ${startDate} - ${endDate}
                        </div>
                        <div class="workshop-time mt-2 mb-2">
                            ${time}
                        </div>
                    </a>
                    <button id="delete-workshop-${workshop.id}" class="delete-workshop">Delete this workshop</button>
                </div>
            `;

            workshopsListStr += workshopStr;
        }
    );

    workshopsListEl.innerHTML = workshopsListStr;
};

const onDeleteWorkshop = async function( event ) {
    const button = event.target;
    const workshopListItem = button.closest( '.workshops-list-item' );
    const workshopId = workshopListItem.getAttribute( 'data-id' );
    
    try {
        await deleteWorkshop( workshopId );
        workshopListItem.remove();

        alert( 'Workshop deleted' );
    } catch( error ) {
        alert( error.message );
    }
};

const addDeleteWorkshopHandler = () => {
    document.querySelectorAll( '.delete-workshop' ).forEach(
        button => {
            button.addEventListener( 'click', onDeleteWorkshop );
        }
    )
};

const fetchAndShowWorkshops = async () => {
    try {
        const workshops = await fetchWorkshops( page );
        showWorkshops( workshops );
        addDeleteWorkshopHandler();
    } catch( error ) {
        const errorMessage = document.getElementById( 'error-message' );
        errorMessage.classList.remove( 'd-none' );
        errorMessage.textContent = error.message;
    }

    // hide the loading message now...
    const loadingMessage = document.getElementById( 'loading-message' );
    loadingMessage.classList.add( 'd-none' );
};

const setupPagination = () => {
    const nextPageBtn = document.getElementById( 'next-page' );
    const previousPageBtn = document.getElementById( 'previous-page' );

    nextPageBtn.addEventListener( 'click', function() {
        page = page + 1;
        fetchAndShowWorkshops();
    });
    
    previousPageBtn.addEventListener( 'click', function() {
        page = page - 1;
        fetchAndShowWorkshops();
    });
};

// window.addEventListener( 'load', async function() {
// DOMContentLoaded fires when the DOM is ready (happens before load event)
document.addEventListener( 'DOMContentLoaded', function() {
    // IMPORTANT: This will not be able to select the workshops list item element, because it does not exist right now
    // document.querySelector( '.workshops-list-item' );

    setupPagination();
    fetchAndShowWorkshops()
        .then(() => { // runs after the fetchAndShowWorkshops() completes execution
            console.log( 'first workshop list item = ', document.querySelector( '.workshops-list-item' ) );
        });
});