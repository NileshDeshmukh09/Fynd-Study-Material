const workshops = require( './data/workshops.json' );

let nextId = 13;

const getAllWorkshops = () => {
    return workshops;
};

const getWorkshopById = ( id ) => {
    return workshops.find( workshop => workshop.id === id );
};

const addWorkshop = ( workshop ) => {
    workshop.id = 13;
    workshops.push( workshop );
    
    return workshop;
};

module.exports = {
    getAllWorkshops,
    getWorkshopById,
    addWorkshop
};