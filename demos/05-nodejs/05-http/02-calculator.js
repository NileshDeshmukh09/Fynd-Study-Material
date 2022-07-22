const http = require( 'http' );
const url = require( 'url' );

/**
 * Sample requests
 * http://localhost:3000/add?x=12&y=13 -> returns the string 25 
 * http://localhost:3000/multiply?x=12&y=13 -> returns the string 156 
 */
const server = http.createServer(( req, res ) => {
    const {
        pathname,
        query : {
            x,
            y
        }
    } = url.parse( req.url, true );

    const intX = parseInt( x );
    const intY = parseInt( y );

    switch( pathname ) {
        case '/add':
            res.end( `${intX + intY}` );
            break;
        case '/subtract':
            res.end( `${intX - intY}` );
            break;
        case '/multiply':
            res.end( `${intX * intY}` );
            break;
        case '/divide':
            res.end( `${intX / intY}` );
            break;
        default:
            res.writeHead( 400 );
            res.end( 'Unsupported operation' );
    }
});

server.listen( 3000 );