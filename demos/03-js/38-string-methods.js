// strings are immutable

// substring( start_idx, end_idx ), substr(start_idx, length)
const greeting = 'Hello, world';
console.log( greeting.substring( 7, 9 ) ); // 'wo'
console.log( greeting.substr( 7, 2 ) ); // 'wo'

// includes()
console.log( greeting.includes( 'wo' ) ); // true
console.log( greeting.includes( '!' ) ); // false

// toUpperCase(), toLowerCase() -> returns the new string
// left as exercise

console.clear();

// replace() -> returns a new string
const newGreeting = greeting.replace( 'world', 'universe' );
console.log( greeting ); // remains 'Hello, world'
console.log( newGreeting ); // 'Hello, universe'

// split() - split a string based on delimiter
const line = 'With great power comes great responsibility';
const words = line.split( ' ' );
console.log( words );

// trim() - removes leading and trailing spaces
console.log( '         Hello, world         '.trim() );

// using regular expression in replace
console.log( line.replace( /e/g, '' ) );

console.clear();

let name = 'john';
name = name.toUpperCase();
console.log( name );