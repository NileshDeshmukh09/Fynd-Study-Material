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

let x = 12;

// an async function can be paused and resumed
const doSerialSums = async () => {
    console.log( 1 );
    // pause the function till the promise is fulfilled (resolves / rejects)
    // the function gives up control, and rest of code can execute
    let result;
    
    result = await sum( x, x + 1 ); // sum( 12, 13 )
    console.log( 'result = ', result );

    result = await sum( result, x + 2 ); // sum( 25, 102 )
    console.log( 'result = ', result );
};

doSerialSums();

x = 100;

console.log( 3 );

for( let i = 0; i < 1e10; i++ ) {
    ;
}

console.log( 'end of script' );