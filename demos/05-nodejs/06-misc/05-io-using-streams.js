/**
 * Write a script to take continuously user input and keep writing it to a file
 * 
 * Hint: Use stream read and stream write
 */
const fs = require( 'fs' );
const path = require( 'path' );

const filePath = path.join( __dirname, 'inputs.txt' );

const ws = fs.createWriteStream( filePath );

// input stream -> process.stdin
// output stream -> ws

// Hint: It is easiest to use pipe() to solve this
process.stdin.pipe( ws );