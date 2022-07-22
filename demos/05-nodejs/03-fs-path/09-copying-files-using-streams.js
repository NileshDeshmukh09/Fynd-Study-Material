/**
 * Your code to read from one file and copy to another file
 * IMPORTANT: Use streams (you do not need to specify the encoding anywhere since you can read raw bytes and write raw bytes)
 */
const fs = require( 'fs' );
const path = require( 'path' );

// this is NOT a text file - we should not specify 'utf-8' as encoding for such files
const src = path.join( __dirname, 'meetings-app.pdf' );
const dest = path.join( __dirname, 'meetings-app.copy.pdf' );

const rs = fs.createReadStream( src );
const ws = fs.createWriteStream( dest );

rs.on( 'data', chunk => ws.write( chunk ) );

rs.on( 'end', () => ws.end() );