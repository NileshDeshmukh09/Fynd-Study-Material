function sum( x, y, callback ) {
    setTimeout(
        () => { // Node JS calls this function
            // return x + y; // returns to Node JS - useless
            callback( x + y ); // calls our function and passes the result - useful
        },
        3000
    );

    // return undefined;
}

sum( 12, 13, ( result ) => {
    console.log( 'result = ', result );
});

console.log( 'some more work to do' );