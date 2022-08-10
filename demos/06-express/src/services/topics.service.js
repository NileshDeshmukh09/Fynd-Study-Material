const mongoose = require( 'mongoose' );
const Topic = mongoose.model( 'Topic' );
const Workshop = mongoose.model( 'Workshop' );

const addTopic = async ( topic ) => {
    try {
        const workshop = await Workshop.findById( topic.workshop );

        if( workshop ) {
            const insertedTopic = await Topic.create( topic );
            return insertedTopic;
        }
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

    if( !workshop ) {
        const error = new Error( `Workshop not found` );
        error.type = 'ValidationError';
        throw error;
    }
};

module.exports = {
    addTopic
};