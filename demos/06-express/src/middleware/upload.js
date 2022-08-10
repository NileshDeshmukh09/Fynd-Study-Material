const path = require( 'path' );
const multer = require( 'multer' );

const storage = multer.diskStorage({
    destination( req, file, done ) {
        done( null, path.join( process.cwd(), 'public/images/profile-pics' ) );
    },
    filename( req, file, done ) {
        done( null, file.originalname );
    }
});

const upload = multer({
    // storage: storage,
    storage
});

module.exports = upload;