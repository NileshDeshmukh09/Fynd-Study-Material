const fs = require("fs");
const path = require("path");

const filePath = path.join( __dirname, "hello.txt" );

// file reading starts
const ws = fs.createWriteStream( filePath, 'utf-8' );

for( let i = 0; i < 1e6; i++ ) {
    ws.write( `${i+1}. hello, world\n` );
}

ws.end(); // you cannot further write after closing the stream