/**
 * Note:
 * 1. exec() creates a shell - this means the command can be executed like in a shell.
 * 2. Data is buffered and passed as a whole to the callback function - not suitable when output is potentially large.
 */
const { exec } = require( 'child_process' );

// Run java compiler
// exec( 'java abc.java', ( err, stdoutData, stderrData ) ) => { }

exec( 'find . -type f | wc -w', ( err, stdoutData, stderrData ) => {
    if( err ) {
        console.error( 'exec error : ', err );
        console.error( 'child process stderr : ', stderrData.toString() );
        return;
    }

    console.log( 'child process stdout (number of files) : ', stdoutData );
});