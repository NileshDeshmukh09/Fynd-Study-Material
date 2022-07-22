const fs = require( 'fs' );
const path = require( 'path' );

const src = path.join( __dirname, 'meetings-app.pdf' );
const dest = path.join( __dirname, 'meetings-app.copy.pdf' );

const rs = fs.createReadStream( src );
const ws = fs.createWriteStream( dest );

// starts reading from read stream using streaming, and writes to write stream
rs.pipe( ws );