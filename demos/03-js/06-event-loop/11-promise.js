// alternative to callback pattern
// ES2015 class called "Promise"
function sum( x, y ) {
    return new Promise(( resolve, reject ) => {
        setTimeout(
            () => {
                if( typeof x !== 'number' || typeof y !== 'number' ) {
                    reject( new Error( 'both arguments must be number' ) );
                    return;
                }

                // we convey the result to the Promise object by calling resolve and passing it the result
                resolve( x + y );
            },
            3000
        );
    });
}

// promise object has 2 methods - then(), catch()
// promise is returned immediately - then(), catch() are called immediately
// Hey promise object! Whenever you get the result please call this function
sum( 12, 'hello' )
    .then( result => { // f - called on resolve
        console.log( 'result = ', result );
    })
    .catch( error => {
        console.log( error.message );
    });

console.log( 'end of script' );