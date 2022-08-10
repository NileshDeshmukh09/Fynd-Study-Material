const mongoose = require( 'mongoose' );
const Topic = mongoose.model( 'Topic' );

const addTopic = async ( topic ) => {
    try {
        const insertedTopic = await Topic.create( topic );
        return insertedTopic;
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
    addTopic
};