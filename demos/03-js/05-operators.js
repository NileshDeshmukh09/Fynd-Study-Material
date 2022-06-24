// arithmetic
// +, -, *, /, %, ** (exponentiation)
let x = 3, y = 4, z = 11;
console.log( x + y ); // 7
console.log( 5 - y ); // 1
console.log( x * y ); // 12
console.log( z / y ); // 2.75
console.log( z % y ); // 3
console.log( 4 ** 3 ); // 64

console.clear();

// increment, decrement etc.
x = 10; // assignment
x++;
console.log( x );

--x;
console.log( x );

// shortcut assignment (+=, -=, *=, ...)
x += 100; // x = x + 100;
console.log( x ); // 110


console.clear();

// relational operators (boolean value is the result)
x = 10, y = 20;
console.log( x < y ); // true
console.log( x <= 10 ); // true
console.log( x < 10 ); // false

console.clear();

// >, >=
// ==, != -> do not check the data type
console.log( x == 5 + 5 ); // true
console.log( x != y ); // true

console.clear();

// ===, !== -> also checks data type
console.log( 1 == '1' ); // true
console.log( 1 === '1' ); // false (different data type)

console.clear();

// logical - need not give boolean result
// !, &&, ||
console.log( 1 < 2 && 2 < 3 ); // true

console.clear();

// ? :
x = 20, y = 10;
const absDiff = x < y ? y - x : x - y;
console.log( absDiff );

console.clear();

// string concatenation : +
const message = 'Good morning', name = 'John';
const greeting = message + ' ' + name + '!';
console.log( greeting );

const john = `John 
Doe`;
console.log( john );

const titles = [ 'Mr', 'Dr' ];

// ${variable} -> called "string interpolation"
// ` : (below esc key, above tab) -> backtick
const greeting2 = `${message} ${titles[1]}. ${name}`;
console.log( greeting2 );