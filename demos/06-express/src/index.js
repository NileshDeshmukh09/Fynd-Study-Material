const express = require( 'express' );
const indexRouter = require( './routes/pages/index.routes' );
const workshopsRouter = require( './routes/api/workshops.routes' );

// Application object (has a web server within)
const app = express();

app.use( indexRouter );
app.use( '/workshops', workshopsRouter );

const PORT = process.env.PORT || 3000;

app
    .listen( PORT, () => {
        console.log( `Server running on http://localhost:${PORT}` );
    }) // listen() returns server
    .on( 'error', error => { // server.on( ... )
        console.error( error.message );
    });