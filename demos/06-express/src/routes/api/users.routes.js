const express = require( 'express' );
const {
    register
} = require( '../../controllers/api/users.controller' );

const router = express.Router();

router.post( '/register', register );

module.exports = router;