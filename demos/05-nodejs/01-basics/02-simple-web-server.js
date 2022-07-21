// import http from 'http';
const http = require( 'http' );

// asynchronous non-blocking function
const server = http.createServer();

// 'request' is an event which fired by the server when an HTTP request is received by the server. We setup the function to be called on this event.

// Hey Server! When you receive requests, please call this method which sends the response
server.on( 'request', ( req, res ) => {
    res.end( 'Hello Node!' );
});

// in case the server throws an error at startup, let us print the error
server.on( 'error', error => {
    console.log( error.message );
});

server.on( 'listening', () => {
    console.log( 'Hurray! Server up and running. Check http://localhost:8080' );
});

server.listen( 8080 );