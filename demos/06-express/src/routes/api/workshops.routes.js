const express = require( 'express' );
const {
    getWorkshops,
    postWorkshop
} = require( '../../controllers/api/workshops.controller' );

const router = express.Router();

router.get( '/', getWorkshops );

router.post( '/', postWorkshop );

module.exports = router;