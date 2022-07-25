// process.stdout - is a writable stream object - write(), end() 
process.stdout.write( 'Hello' );
process.stdout.write( 'World' );
// process.stdout.end( '\n' );

// process.stdin - a readable stream
process.stdin.on( 'data', chunk => {
    process.stdout.write( chunk );
});

process.stdin.on( 'end', chunk => {
    process.stdout.write( 'End of user input' );
});

process.stdin.on( 'error', error => {
    process.stdout.write( error.message );
});
