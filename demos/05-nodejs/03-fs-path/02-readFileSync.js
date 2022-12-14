const fs = require( 'fs' );
const path = require( 'path' );

console.log( __filename );
console.log( __dirname );

const filePath = path.join( __dirname, '..', 'index.md' );

// synchronous method - VERY BAD! - Rest of the code that follows has to wait till file is read completely
try {
    const contents = fs.readFileSync( filePath, 'utf-8' );
    console.log( contents );
} catch( error ) {
    console.error( error.message );
}

console.log( 'last line of script' );