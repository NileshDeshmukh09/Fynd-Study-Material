const fs = require( 'fs' );
const path = require( 'path' );

const src = path.join( __dirname, 'meetings-app.pdf' );
const dest = path.join( __dirname, 'meetings-app.copy.pdf' );

const rs = fs.createReadStream( src );
const ws = fs.createWriteStream( dest );

// starts reading from read stream using streaming, and writes to write stream
// pipe avoids memory bloat which can happen if we handle the stream events ourselves (reading chunks is much faster than writing chunks, and this leads to buffering on the chunks read)
rs.pipe( ws );