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
// 'profilePic' is the 'name' of the field in the form used to upload the file
// In frontend, for HTML
// <form action="/api/auth/upload-profile-image" method="POST" enctype="multipart/form-data">
//      <input type="file" name="profilePic" />
// </form>
router.post( '/upload-profile-image', upload.single( 'profilePic' ), uploadProfileImage );

module.exports = router;