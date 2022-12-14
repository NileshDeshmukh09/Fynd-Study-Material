const fs = require( 'fs' );
const path = require( 'path' );
const http = require( 'http' );

/**
 * req is a Readable stream (just like rs)
 * res object is a Writable stream (just like ws). writing to this stream sends the data in the network response body
 */
const server = http.createServer(( req, res ) => {
    const rs = fs.createReadStream( path.join( __dirname, 'meetings-app.pdf' ) );

    rs.pipe( res );
});

server.listen( 8080 );