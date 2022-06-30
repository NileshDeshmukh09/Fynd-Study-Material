// setTimeout requests runtime to run the function (f) after 5 second ("Application form")
// setTimeout is asynchronous / non-blocking
setTimeout(
    () => { // f
        console.log( 'f was called' );
    },
    5000 // number is milliseconds (5 seconds)
);

console.log( 'last line of script' );