const { fork } = require( 'child_process' );
const http = require( 'http' );
const url = require( 'url' );

// http://locahost:3000?n=1000
const server = http.createServer(( req, res ) => {
    const n = parseInt( url.parse( req.url, true ).query.n );

    // starts off child process which runs the given JS script
    const child = fork( './04-fork-long-computation-calculate-sum-till-n.js' );

    // what to do when we receive message from `child`
    child.on( 'message', data => {
        res.end( data.result + "" );
    });

    child.send({
        n: n
    });
});

server.listen( 3000 );