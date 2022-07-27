const {
    getAllWorkshops,
    // renaming while destructuring since there is a function with the same name in this file as well
    getWorkshopById : getWorkshopByIdSvc
} = require( '../../services/workshops.service' );

const getWorkshops = ( req, res ) => {
    const workshops = getAllWorkshops();
    // send(), redirect(), json(), sendFile(), render()
    res.status( 200 ).json({
        status: 'success',
        data: workshops
    });
};

const getWorkshopById = ( req, res, next ) => {
    const id = +req.params.id;

    const workshop = getWorkshopByIdSvc( id );

    if( !workshop ) {
        const error = new HttpError( `Workshop with id = ${id} does not exist`, 404 );

        next( error );
        // since response is sent, we need to return so as not to continue try processing the request further
        return;
    }
    
    res.status( 200 ).json({
        status: 'success',
        data: workshop
    });
};

const postWorkshop = ( req, res ) => {
    res.status( 201 ).send( 'We will add a workshop' );
};

module.exports = {
    getWorkshops,
    postWorkshop,
    getWorkshopById
};