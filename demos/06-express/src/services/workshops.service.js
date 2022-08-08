const mongoose = require( 'mongoose' );
const Workshop = mongoose.model( 'Workshop' );

const getAllWorkshops = async ( page, sortField ) => {
    // const startIndex = 10 * ( page - 1 );
    // const endIndex = 10 * page;

    // if we do not await, the query does not execute immediately (it will only execute when the function pauses/completes without pausing) - this allows us to customize the query (Add sorting, pagination etc.)
    const query = Workshop.find();

    if( sortField ) {
        query.sort({
            [sortField]: 1
        });
    }

    // pagination (assuming 10 per page)
    query.skip( 10 * ( page - 1 ) ).limit( 10 );

    const workshops = await query.exec();
    return workshops;
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

const updateWorkshop = async ( id, workshop ) => {
    // by default, $set is applied to the fields
    /**
     *  {
            $set: {
                "name": "Vue JS v2",
                "category": "frontend"
            }
        }
     */
    // by default Mongoose will not perform schema validations on update
    try {
        const updatedWorkshop = await Workshop.findByIdAndUpdate( id, workshop/*, {
            // returnOriginal: false
            new: true
        } */);
        return updatedWorkshop;
    } catch( error ) {
        if( error.name === 'CastError' ) {
            const dbError = new Error( `Data type error : ${error.message}` );
            dbError.type = 'CastError';
            throw dbError;
        } else {
            throw error;
        }
    }
};

const deleteWorkshop = async ( id ) => {
    const deletedWorkshop = await Workshop.findByIdAndRemove( id );

    if( deletedWorkshop === null ) {
        const error = new Error( 'No such workshop' );
        error.type = 'NotFound';
        throw error;
    }

    return deletedWorkshop;
};

module.exports = {
    getAllWorkshops,
    getWorkshopById,
    addWorkshop,
    updateWorkshop,
    deleteWorkshop
};