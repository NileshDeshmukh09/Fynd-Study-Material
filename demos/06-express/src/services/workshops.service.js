const mongoose = require( 'mongoose' );
const Workshop = mongoose.model( 'Workshop' );

const getAllWorkshops = ( page, sortField ) => {
    const startIndex = 10 * ( page - 1 );
    const endIndex = 10 * page;

    const sortedWorkshops = workshops.sort(( w1, w2 ) => {
        if( w1[sortField] < w2[sortField] ) {
            return -1;
        }

        if( w1[sortField] > w2[sortField] ) {
            return 1;
        }

        return 0;
    });

    return sortedWorkshops.slice( startIndex, endIndex );
};

const getWorkshopById = ( id ) => {
    return workshops.find( workshop => workshop.id === id );
};

const addWorkshop = async ( workshop ) => {
    try {
        const insertedWorkshop = await Workshop.create( workshop );
        return insertedWorkshop;
    } catch( error ) {
        throw error;
    }
};

module.exports = {
    getAllWorkshops,
    getWorkshopById,
    addWorkshop
};