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

const getWorkshopById = async ( id ) => {
    try {
        const workshop = await Workshop.findById( id );

        if( workshop === null ) {
            const error = new Error( 'No such workshop' );
            error.type = 'NotFound';
            throw error;
        }

        return workshop;

    } catch( error ) {
        if( error.name === 'CastError' ) {
            const dbError = new Error( `Data type error : ${error.message}` );
            dbError.type = 'CastError';
            throw dbError;
        }

        if( error.type === 'NotFound' ) {
            throw error;
        }
    }
};

const addWorkshop = async ( workshop ) => {
    try {
        const insertedWorkshop = await Workshop.create( workshop );
        return insertedWorkshop;
    } catch( error ) {
        if( error.name === 'ValidationError' ) {
            const dbError = new Error( `Validation error : ${error.message}` );
            dbError.type = 'ValidationError';
            throw dbError;
        }
        
        if( error.name === 'CastError' ) {
            const dbError = new Error( `Data type error : ${error.message}` );
            dbError.type = 'CastError';
            throw dbError;
        }
    }
};

module.exports = {
    getAllWorkshops,
    getWorkshopById,
    addWorkshop
};