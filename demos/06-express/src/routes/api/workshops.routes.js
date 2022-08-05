const express = require( 'express' );
const {
    getWorkshops,
    getWorkshopById,
    postWorkshop,
    deleteWorkshop
} = require( '../../controllers/api/workshops.controller' );

const router = express.Router();

router.get( '/', getWorkshops );
router.get( '/:id', getWorkshopById )
router.post( '/', postWorkshop );
router.delete( '/:id', deleteWorkshop );

module.exports = router;