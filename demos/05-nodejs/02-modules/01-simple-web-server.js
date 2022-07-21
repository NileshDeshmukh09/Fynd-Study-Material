const http = require( 'http' );
// const handlers = require( './handlers' );
const {
    onRequest,
    onError,
    onListening
} = require( './handlers' );

const server = http.createServer();

// server.on( 'request', handlers.onRequest );
// server.on( 'error', handlers.onError );
// server.on( 'listening', handlers.onListening );

server.on( 'request', onRequest );
server.on( 'error', onError );
server.on( 'listening', onListening );

server.listen( 8080 );