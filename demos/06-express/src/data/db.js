const mongoose = require( 'mongoose' );

const connect = async () => {
    try {
        await mongoose.connect( `mongodb://localhost:27017` );
        console.log( 'connected to db' );
    } catch( error ) {
        console.error( error.message );
        process.exit( 1 );
    }
};

module.exports = {
    connect
}