const fetchWorkshops = async () => {
    const response = await fetch( `https://workshops-server.herokuapp.com/workshops` );
    const workshops = await response.json();
    return workshops;
};

window.addEventListener( 'load', async function() {
    const workshops = await fetchWorkshops();
    console.log( workshops );
});