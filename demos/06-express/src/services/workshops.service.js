const workshops = require( './data/workshops.json' );

const getAllWorkshops = () => {
    return workshops;
};

module.exports = {
    getAllWorkshops
};