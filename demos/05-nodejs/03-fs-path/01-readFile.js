const fs = require( 'fs' );
const path = require( 'path' ); // platform-independent file paths

// 2 special variables in a Node script
console.log( __filename ); // absolute path of current file 
console.log( __dirname ); // absolute path of current file's folder

const filePath = path.join( __dirname, '..', 'index.md' ); // shows the location of the file

// asynchronous
// the callback function is called when the file has been read
fs.readFile( filePath, 'utf-8', ( error, contents ) => {
    if( error ) {
        console.error( error.message );
        return;
    }

    // If we do not pass encoding as 2nd argument we get a buffer (a byte array)
    // console.log( contents.toString( 'utf-8' ) );
    console.log( contents );
});

console.log( 'last line of script' );