const {
    getAllWorkshops,
    // renaming while destructuring since there is a function with the same name in this file as well
    getWorkshopById : getWorkshopByIdSvc,
    addWorkshop,
    updateWorkshop,
    deleteWorkshop : deleteWorkshopSvc
} = require( '../../services/workshops.service' );

// http://localhost:3000/api/workshops
// http://localhost:3000/api/workshops?page=2&sort=name
const getWorkshops = async ( req, res ) => {
    let { page, sort : sortField } = req.query;

    if( page ) {
        page = +page;
    } else {
        page = 1;
    }

    const workshops = await getAllWorkshops( page, sortField );
    // send(), redirect(), json(), sendFile(), render()
    res.status( 200 ).json({
        status: 'success',
        data: workshops
    });
};

// http://localhost:3000/api/workshops/:id
const getWorkshopById = async ( req, res, next ) => {
    const id = req.params.id;

    try {
        const workshop = await getWorkshopByIdSvc( id );

        res.status( 200 ).json({
            status: 'success',
            data: workshop
        });
    } catch( error ) {
        const httpError = new HttpError( error.message, 404 ); // 404 -> not found

        next( httpError );
    }
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

const patchWorkshop = async ( req, res, next ) => {
    const id = req.params.id;

    const workshop = req.body;

    try {
        const updatedWorkshop = await updateWorkshop( id, workshop );
        res.status( 200 ).json({
            status: 'success',
            data: updatedWorkshop
        });
    } catch( error ) {
        const httpError = new HttpError( error.message, 404 );

        next( httpError );
    }
};

const deleteWorkshop = async ( req, res, next ) => {
    const id = req.params.id;

    try {
        await deleteWorkshopSvc( id );
        // 204 -> use this status code for successful operation but you do not want to send any data in response
        res.status( 204 ).json();
    } catch( error ) {
        const httpError = new HttpError( error.message, 404 );

        next( httpError );
    }
};

module.exports = {
    getWorkshops,
    getWorkshopById,
    postWorkshop,
    patchWorkshop,
    deleteWorkshop
};