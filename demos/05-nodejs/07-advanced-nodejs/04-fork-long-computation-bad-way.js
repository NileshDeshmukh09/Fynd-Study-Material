const { fstat } = require('fs');
const http = require( 'http' );
const url = require( 'url' );

// http://locahost:3000?n=1000
const server = http.createServer(( req, res ) => {
    const n = parseInt( url.parse( req.url, true ).query.n );

    const result = sumTillN( n );

    res.end( result + '' );
});

server.listen( 3000 );