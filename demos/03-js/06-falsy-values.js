let x;

// x = 0; // treated as false in a condition
// x = null;
// x = undefined;
// x = '';
// x = false;
// x = NaN; // not a number

if( x ) {
    console.log( 'hello' );
} else {
    console.log( 'world' );
}

console.clear();

// any other value is truthy
let y;

// y = 100;
// y = 'John';
// y = []; // empty array
// y = {}; // empty object

if( y ) {
    console.log( 'hello' );
} else {
    console.log( 'world' );
}