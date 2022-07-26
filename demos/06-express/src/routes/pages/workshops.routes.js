const express = require( 'express' );
const {
    showWorkshops
} = require( '../../controllers/page/workshops.controller' );

const router = express.Router();

router.get( '/', showWorkshops );

module.exports = router;