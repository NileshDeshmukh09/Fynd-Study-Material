// In JavaScript, the default value for a variable is undefined
console.log( undefined );

// this variable gets undefined as its value
let x;
console.log( x );

console.log( x === undefined ); // true

x = 100;
console.log( x === undefined ); // false

x = undefined;
console.log( x === undefined ); // true