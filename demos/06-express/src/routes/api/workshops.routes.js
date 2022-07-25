const express = require( 'express' );

const router = express.Router();

router.get( '/workshops', ( req, res ) => {
    res.send( 'We will send workshops' );
});

module.exports = router;