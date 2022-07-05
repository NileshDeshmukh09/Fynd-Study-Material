let page = 1;

const fetchWorkshops = async () => {
    const response = await fetch( `https://workshops-server.herokuapp.com/workshops?` + new URLSearchParams({
        _page: page
    }));
    
    // take care of cases when backend returns an error - we need to throw the error from this function ourselves
    if( !response.ok ) {
        const responseText = await response.text(); // get the text error message from the backend
        throw new Error( responseText || 'Some error occured' );
    }

    const workshops = await response.json();
    return workshops;
};

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
                <a class="workshops-list-item link-plain" href="/workshop-details.html">
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
            `;

            workshopsListStr += workshopStr;
        }
    );

    workshopsListEl.innerHTML = workshopsListStr;
};

const fetchAndShowWorkshops = async () => {
    try {
        const workshops = await fetchWorkshops();
        showWorkshops( workshops );
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
    setupPagination();
    fetchAndShowWorkshops(); 
});