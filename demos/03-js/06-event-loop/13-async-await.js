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

// an async function can be paused and resumed
// async function ALWAYS return a promise
const doSerialSums = async () => {
    console.log( 1 );
    // pause the function till the promise is fulfilled (resolves / rejects)
    // the function gives up control, and rest of code can execute
    let result;
    
    result = await sum( 12, 13 );
    console.log( 'result = ', result );

    result = await sum( result, 14 );
    console.log( 'result = ', result );
    
    result = await sum( result, 15 );
    console.log( 'result = ', result );

    return result;
};

doSerialSums()
    .then( finalResult => {
        console.log( 'final result = ', finalResult );
    });

console.log( 3 );

for( let i = 0; i < 1e10; i++ ) {
    ;
}

console.log( 'end of script' );