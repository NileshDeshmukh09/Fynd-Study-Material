const {
    getAllWorkshops,
    // renaming while destructuring since there is a function with the same name in this file as well
    getWorkshopById : getWorkshopByIdSvc,
    addWorkshop
} = require( '../../services/workshops.service' );

// http://localhost:3000/api/workshops
// http://localhost:3000/api/workshops?page=2&sort=name
const getWorkshops = ( req, res ) => {
    let { page, sort : sortField } = req.query;

    if( page ) {
        page = +page;
    } else {
        page = 1;
    }

    console.log( page );
    console.log( sortField );

    const workshops = getAllWorkshops( page, sortField );
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

const postWorkshop = async ( req, res, next ) => {
    const workshop = req.body;
    
    try {
        let updatedWorkshop = await addWorkshop( workshop );
        
        res.status( 201 ).json({
            status: 'success',
            data: updatedWorkshop
        });
    } catch( error ) {
        const httpError = new HttpError( error.message, 400 );

        next( httpError );
    }
};

module.exports = {
    getWorkshops,
    postWorkshop,
    getWorkshopById
};