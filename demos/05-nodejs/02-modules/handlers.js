const onRequest = ( req, res ) => {
    res.end( 'Hello Node!' );
};

const onError = error => {
    console.log( error.message );
};

const onListening = () => {
    console.log( 'Hurray! Server up and running. Check http://localhost:8080' );
};

// module.exports.onRequest = onRequest;
// module.exports.onError = onError;
// module.exports.onListening = onListening;

module.exports = {
    // onRequest: onRequest
    onRequest,
    onError,
    onListening
};

// this is also ok
// module.exports = ( a, b ) => {
//     return a + b;
// }

console.log( module.exports );