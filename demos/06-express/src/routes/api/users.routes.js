const express = require( 'express' );
const {
    register,
    login,
    uploadProfileImage
} = require( '../../controllers/api/users.controller' );
const upload = require( '../../middleware/upload' );
const router = express.Router();

router.post( '/register', register );
router.post( '/login', login );
router.post( '/upload-profile-image', upload.single( 'profilePic' ), uploadProfileImage );

module.exports = router;