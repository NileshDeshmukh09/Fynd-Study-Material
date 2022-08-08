const {
    addUser
} = require( '../../services/users.service' );

const register = async ( req, res, next ) => {
    const user = req.body;

    // if user = req.body -> {}
    if( Object.keys( user ).length === 0 ) {
        const httpError = new HttpError( "Body is missing", 400 );

        next( httpError );
        return;
    }

    try {
        // updatedUser actually has many more details than the ones in the user document.
        const updatedUser = await addUser( user );
        const userToSend = {
            ...updatedUser.toObject()
        };
        delete userToSend.password;

        res.status( 201 ).json({
            status: 'success',
            data: userToSend // internally userToSend.toJSON() runs which returns details about the user that are part of the user document
        });
    } catch( error ) {
        const httpError = new HttpError( error.message, 400 );

        next( httpError );
    }
};


module.exports = {
    register
};