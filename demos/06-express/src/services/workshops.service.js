const workshops = require( './data/workshops.json' );

const getAllWorkshops = () => {
    return workshops;
};

const getWorkshopById = ( id ) => {
    return workshops.find( workshop => workshop.id === id );
};

module.exports = {
    getAllWorkshops,
    getWorkshopById
};