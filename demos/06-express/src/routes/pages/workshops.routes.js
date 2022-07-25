const express = require( 'express' );

const router = express.Router();

router.get( '/', ( req, res ) => {
    res.send( 'Shall send workshops page' );
});

module.exports = router;