const express = require( 'express' );

const router = express.Router();

router.get( '/', ( req, res ) => {
    res.send( 'We will send workshops' );
});

router.post( '/', ( req, res ) => {
    res.send( 'We will add a workshop' );
});

module.exports = router;