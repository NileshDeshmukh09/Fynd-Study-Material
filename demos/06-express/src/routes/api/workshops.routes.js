const express = require( 'express' );
const {
    getWorkshops,
    getWorkshopById,
    postWorkshop
} = require( '../../controllers/api/workshops.controller' );

const router = express.Router();

router.get( '/', getWorkshops );
router.get( '/:id', getWorkshopById )
router.post( '/', postWorkshop );

module.exports = router;