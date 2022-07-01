function sum( x, y ) {
    return new Promise(( resolve, reject ) => {
        setTimeout(
            () => {
                if( typeof x !== 'number' || typeof y !== 'number' ) {
                    reject( new Error( 'both arguments must be number' ) );
                    return;
                }

                resolve( x + y );
            },
            3000
        );
    });
}

sum( 12, 13 )
    .then( result1 => {
        console.log( 'result1 = ', result1 );

        // return 100;
        return sum( result1, 'hello' );

            // .catch( error => {
            //     console.log( error.message );
            // })
    })
    .then( result2 => {
        console.log( 'result2 = ', result2 );
    })
    .catch( error => {
        console.log( error.message );
    });