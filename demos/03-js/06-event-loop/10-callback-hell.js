function sum( x, y, callback ) {
    setTimeout(
        () => {
            callback( x + y );
        },
        3000
    );
}

// christmas tree / callback hell
sum( 12, 13, function( result1 ) {
    console.log( 'result1 = ', result1 );

    sum( result1, 14, function( result2 ) {
        console.log( 'result2 = ', result2 );

        sum( result2, 15, function( result3 ) {
            console.log( 'result3 =', result3 );
        });
    });
});