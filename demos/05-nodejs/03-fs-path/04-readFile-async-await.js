const fs = require( 'fs/promises' );
const path = require( 'path' );

// asynchronous
const readIndexFile = async () => {
    const filePath = path.join( __dirname, '..', 'index.md' );

    try {
        const contents = await fs.readFile( filePath, 'utf-8' );
        console.log( contents );
    } catch( error ) {
        console.error( error.message );
    };
}

readIndexFile();
console.log( 'last line of script' );