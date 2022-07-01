function sum( x, y, callback ) {
    setTimeout(
        () => {
            callback( x + y );
        },
        3000
    );
}

sum( 12, 13, function( result1 ) {
    console.log( 'result1 = ', result1 );
});