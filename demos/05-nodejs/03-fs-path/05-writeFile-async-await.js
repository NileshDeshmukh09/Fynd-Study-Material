const fs = require( 'fs/promises' );
const path = require( 'path' );

const filePath = path.join( __dirname, 'hello.txt' );

const contents = `Hello world
What's up!
`;

// How do we append to existing contents instead of overwriting the contents of the file?
const writeHelloFile = async () => {
    try {
        await fs.writeFile( filePath, contents, 'utf-8' );
        console.log( 'done writing - check hello.txt' );
    } catch( error ) {
        console.error( error.message );
    }
};

writeHelloFile();