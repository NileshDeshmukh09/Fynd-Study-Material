const fetchWorkshops = async () => {
    const response = await fetch( `https://workshops-server.herokuapp.com/workshops` );
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
                description
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
    const workshops = await fetchWorkshops();
    showWorkshops( workshops );
});