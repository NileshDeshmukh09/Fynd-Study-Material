// 1 3 5 (t = 0)
// 4 (t = 2)
// 6 (t = 4)
// 2 (t = 5)

console.log( 1 );

setTimeout(
    () => { // f1
        console.log( 2 );
    },
    5000
);

console.log( 3 );

setTimeout(
    () => { // f2
        console.log( 4 );

        setTimeout(
            () => { // f3
                console.log( 6 );
            },
            2000
        );
    },
    2000
);

console.log( 5 );