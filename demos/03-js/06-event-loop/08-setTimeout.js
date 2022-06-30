setTimeout(
    () => { // this goes to the event queue immediately
        console.log( 1 );
    },
    0
);

console.log( 2 );