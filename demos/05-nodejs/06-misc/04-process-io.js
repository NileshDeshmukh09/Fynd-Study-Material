// process.stdout - is a writable stream object - write(), end() 
process.stdout.write( 'Hello' );
process.stdout.write( 'World' );
// process.stdout.end( '\n' );

// process.stdin - a readable stream
process.stdin.on( 'data', chunk => {
    process.stdout.write( chunk );
});

// https://www.devdungeon.com/content/windows-eof-ctrl-d-equivalent
// https://superuser.com/questions/291224/equivalent-to-d-in-bash-for-cmd-exe
// Press Ctrl+D to end the input (Linux/Mac), ? end the input (Windows)
process.stdin.on( 'end', () => {
    process.stdout.write( 'End of user input' );
});

process.stdin.on( 'error', error => {
    process.stdout.write( error.message );
});
