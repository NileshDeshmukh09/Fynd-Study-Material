const fetchWorkshops = async () => {
    const response = await fetch( `https://workshops-server.herokuapp.com/workshop` );
    
    // take care of cases when backend returns an error - we need to throw the error from this function ourselves
    if( !response.ok ) {
        const responseText = await response.text();
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

window.addEventListener( 'load', async function() {
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
});