const path = require( 'path' );
const express = require( 'express' );
const indexRouter = require( './routes/pages/index.routes' );
const workshopsRouter = require( './routes/pages/workshops.routes' );
const workshopsApiRouter = require( './routes/api/workshops.routes' );
const logger = require( './middleware/logger' );
const { apiNotFound, pageNotFound } = require( './middleware/error' );

// Application object (has a web server within)
const app = express();

// app allows us to store and share key-value pairs
// in router handlers, we can use req.app.get( 'title' ) to read this
app.set( 'title', 'Workshops App' );

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( process.cwd(), 'views' ) );

app.use( logger );

// app.use(( req, res, next ) => {
//     console.log( 'A request was received (1) | req.url = ', req.url );
//     next();
// });

app.use( express.static( path.join( process.cwd(), 'public' ) ) );

// app.use(( req, res, next ) => {
//     console.log( 'A request was received (2) | req.url = ', req.url );
//     next();
// });

app.use( indexRouter );
app.use( '/workshops', workshopsRouter );
app.use( '/api/workshops', workshopsApiRouter );

app.use( '/api', apiNotFound );
app.use( pageNotFound );

const PORT = process.env.PORT || 3000;

app
    .listen( PORT, () => {
        console.log( `Server running on http://localhost:${PORT}` );
    }) // listen() returns server
    .on( 'error', error => { // server.on( ... )
        console.error( error.message );
    });