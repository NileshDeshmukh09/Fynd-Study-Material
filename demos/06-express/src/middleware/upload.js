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

const fileFilter = ( req, file, done ) => {
    const extension = path.extname( file.originalname ).toUpperCase();

    const allowedExtensions = [ '.JPG', 'JPEG', '.PNG' ];
    
    if( !allowedExtensions.includes( extension ) ) {
        const error = new HttpError( 'Allowed file extension are .jpg, .jpeg and .png' );
        done( error );
        return;
    }

    done( null, true );
};

const upload = multer({
    // storage: storage,
    storage,
    fileFilter
});

module.exports = upload;