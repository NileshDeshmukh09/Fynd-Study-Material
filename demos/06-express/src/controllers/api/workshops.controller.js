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

const getWorkshopById = ( req, res ) => {
    const id = +req.params.id;

    const workshop = getWorkshopByIdSvc( id );

    if( !workshop ) {
        res.status( 404 ).json({
            status: 'error',
            message: `Workshop with id = ${id} does not exist`
        });
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