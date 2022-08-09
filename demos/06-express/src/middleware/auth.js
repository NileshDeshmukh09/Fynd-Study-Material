const jwt = require( 'jsonwebtoken' );

const authenticate = ( req, res, next ) => {
    const token = req.header( 'Authorization' );
    
    jwt.verify( token, process.env.JWT_SECRET, function( err, claims ) {
        if( err ) {
            const error = new Error( 'Bad credentials' );
            // invalid user
            error.status = 401;
            next( error );
            return;
        }

        res.locals.claims = claims;
        next();
    });
};

const authorize = ( req, res, next ) => {
    const { claims } = res.locals;

    if( claims.role !== 'admin' ) {
        const error = new Error( 'Unauthorized' );
        // for a valid user, but one who has insufficient privileges (send 403)
        error.status = 403;
        next( error );
        return;
    }

    next();
};

module.exports = {
    authenticate,
    authorize
};