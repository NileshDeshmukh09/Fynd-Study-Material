// 1 3 5 (t = 0)
// 2 4 (t = 3)

console.log( 1 );

setTimeout(
    () => { // f1
        console.log( 2 );
    },
    3000
);

console.log( 3 );

setTimeout(
    () => { // f2
        console.log( 4 );
    },
    3000
);

console.log( 5 );