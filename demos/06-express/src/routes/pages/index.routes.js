const express = require( 'express' );

const {
    showHome,
    redirectToHome,
    showAbout
} = require( '../../controllers/page/index.controller' );

const router = express.Router();

router.get( '/', showHome );

router.get( '/home', redirectToHome );

// EXERCISE: Just for fun
// /ping -> /pong
// /pong -> /ping
router.get( '/ping', ( req, res ) => {
    res.redirect( '/pong' );
});

router.get( '/pong', ( req, res ) => {
    res.redirect( '/ping' );
});

router.get( '/about', showAbout );

module.exports = router;