const express = require( 'express' );
// NOTE: we must .json extension
const workshops = require( './data/workshops.json' );

const router = express.Router();

router.get( '/', ( req, res ) => {
    // send(), redirect(), json(), render()
    res.status( 200 ).json( workshops );
});

router.post( '/', ( req, res ) => {
    res.status( 201 ).send( 'We will add a workshop' );
});

module.exports = router;