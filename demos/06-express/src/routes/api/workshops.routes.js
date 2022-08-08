const express = require( 'express' );
const {
    getWorkshops,
    getWorkshopById,
    postWorkshop,
    patchWorkshop,
    addSpeakers,
    deleteWorkshop
} = require( '../../controllers/api/workshops.controller' );

const router = express.Router();

router.get( '/', getWorkshops );
router.get( '/:id', getWorkshopById )
router.post( '/', postWorkshop );
router.patch( '/:id', patchWorkshop );
router.patch( '/:id/speakers', addSpeakers );
router.delete( '/:id', deleteWorkshop );

module.exports = router;