const express = require( 'express' );

const router = express.Router();

// Method = GET
// req, res -> same as in Node JS but with extra features
router.get( '/', ( req, res ) => {
    // res.send() adds Response header - 'Content-Type': 'text/html'
    res.send( 'This is the workshops app' );
});

router.get( '/home', ( req, res ) => {
    // tell the browser to make request to / instead. On receiving this response, the browser makes a new request to /
    res.redirect( '/' );
});

// EXERCISE: Just for fun
// /ping -> /pong
// /pong -> /ping
router.get( '/ping', ( req, res ) => {
    res.redirect( '/pong' );
});

router.get( '/pong', ( req, res ) => {
    res.redirect( '/ping' );
});

router.get( '/about', ( req, res ) => {
    res.send( 'This server serves details about workshops in and around your city' );
});

module.exports = router;