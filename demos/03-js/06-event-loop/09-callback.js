function sum( x , y, callback ) {
    setTimeout(
        () => { // Node calls this function
            // return x + y;
            callback( x + y );
        },
        3000
    );
    // return undefined;
}

console.log( sum( 12, 13, result => {
    console.log( result );
}));