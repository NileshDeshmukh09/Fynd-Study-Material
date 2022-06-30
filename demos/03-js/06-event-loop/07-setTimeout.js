setTimeout(
    () => { // f
        console.log( 1 );
    },
    3000
);

// takes 7000 - 8000 ms
for( let i = 0; i < 1e10; i++ ) {
    ;
}

setTimeout(
    () => {
        console.log( 2 );
    },
    2000
);