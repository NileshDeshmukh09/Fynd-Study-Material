const { getAllWorkshops } = require( '../../services/workshops.service' );

const getWorkshops = ( req, res ) => {
    const workshops = getAllWorkshops();
    // send(), redirect(), json(), sendFile(), render()
    res.status( 200 ).json( workshops );
};

const postWorkshop = ( req, res ) => {
    res.status( 201 ).send( 'We will add a workshop' );
};

module.exports = {
    getWorkshops,
    postWorkshop
};