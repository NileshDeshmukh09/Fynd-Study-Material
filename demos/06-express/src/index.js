const express = require( 'express' );

// Application object (has a web server within)
const app = express();

const PORT = process.env.PORT || 3000;

app
    .listen( PORT, () => {
        console.log( `Server running on http://localhost:${PORT}` );
    }).on( 'error', error => {
        console.error( error.message );
    });