const express = require( 'express' );

const router = express.Router();

router.get( '/', ( req, res ) => {
    res.render( 'workshops', {
        numWorkshops: 20
    });
});

module.exports = router;