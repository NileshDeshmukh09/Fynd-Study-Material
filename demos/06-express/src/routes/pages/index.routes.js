const express = require( 'express' );

const router = express.Router();

// Method = GET
// req, res -> same as in Node JS but with extra features
router.get( '/', ( req, res ) => {
    // res.send() adds Response header - 'Content-Type': 'text/html'
    res.send( 'This is the workshops app' );
    console.log( '***' );
});

router.get( '/about', ( req, res ) => {
    res.send( 'This server serves details about workshops in and around your city' );
});

module.exports = router;