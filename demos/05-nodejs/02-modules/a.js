// b.js will execute and in turn execute c.js
const b = require( './b' );

// c.js will NOT execute. The value of its exports will be returned.
const c = require( './c' );

console.log( 'a started executing' );

console.log( b );
console.log( c );

module.exports = 'I am a';