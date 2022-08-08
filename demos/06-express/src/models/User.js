const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcrypt' );

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'general',
        enum: [ 'admin', 'general' ]
    }
});

const emailPat = /^[A-Za-z0-9_\.]+@fynd\.com$/;
const passwordPat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

// we can customize the schema further before model is created
userSchema.path( 'email' ).validate(
    email => emailPat.test( email ),
    "Invalid email. Please make sure the email is a fynd.com email."
);

userSchema.path( 'password' ).validate(
    password => passwordPat.test( password ),
    "Password must have at least 1 upper case, 1 lower case, 1 digit, 1 special characters, and should be 8 characters in length."
);

const SALT_FACTOR = 10;

userSchema.pre( 'save', function( done ) {
    const user = this; // const user -> new User()

    if( !user.isModified( 'password' ) ) {
        done();
        return;
    }

    bcrypt.genSalt( SALT_FACTOR, function( err, salt ) {
        if( err ) {
            return done( err ); // Mongoose will not insert the user document 
        }

        bcrypt.hash( user.password, salt, function( err, hashedPassword ) {
            if( err ) {
                return done( err );
            }

            user.password = hashedPassword;
            done(); // pass no arguments to done() to signify success
        });
    })

    console.log( 'executes immediately' );
});

mongoose.model( 'User', userSchema );