// NOTE: we must .json extension
const workshops = require( './data/workshops.json' );

const getWorkshops = ( req, res ) => {
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