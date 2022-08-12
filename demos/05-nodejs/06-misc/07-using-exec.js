const { exec } = require( 'child_process' );
const path = require( 'path' );

const filename = 'Sample.java'

exec( `javac ${filename}`, { cwd: __dirname }, function( error, stdout, stderr ) {
    // if (error) {
    //     console.error(`exec error: ${error}`);
    //     return;
    // }

    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});