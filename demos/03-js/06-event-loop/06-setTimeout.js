// f will be added to the "event queue" after 2 seconds
// when the runtime is "free", it will pick up functions from the event queue and execute them
// JS is a "single-threaded" language
setTimeout(
    () => { // f
        console.log( 1 );
    },
    2000 // minimum delay
);

// 1 x 10^10
// CPU intensive task
for( let i = 0; i < 1e10; i++ ) {
    ;
}

console.log( 2 );