const http = require( 'http' );
const url = require( 'url' );

const server = http.createServer(( req, res ) => {
    // console.log( req.url );

    console.log( url.parse( req.url, true ) );

    const {
        pathname,
        query : {
            action,
            email
        }
    } = url.parse( req.url, true );
    
    console.log( pathname, action, email );

    if( action === 'add_attendee' ) {
        res.end( `Okay, we will add ${email} to the meeting` );
    } else if( action === 'remove_attendee' ) {
        res.end( `Okay, we will remove ${email} from the meeting` );
    }
});

server.listen( 8080 );