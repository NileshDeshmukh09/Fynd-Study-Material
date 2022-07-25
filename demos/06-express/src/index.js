const express = require( 'express' );

// Application object (has a web server within)
const app = express();

// Method = GET
// req, res -> same as in Node JS but with extra features
app.get( '/', ( req, res ) => {
    // res.send() adds Response header - 'Content-Type': 'text/html'
    res.send( 'This is the workshops app' );
});

// EXERCISE: Handle /about and send something about the app.

const PORT = process.env.PORT || 3000;

app
    .listen( PORT, () => {
        console.log( `Server running on http://localhost:${PORT}` );
    }) // listen() returns server
    .on( 'error', error => { // server.on( ... )
        console.error( error.message );
    });