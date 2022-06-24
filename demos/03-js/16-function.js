// EXERCISE: Read up on the concept of "Hoisting"
console.log( sum1( 10, 20 ) );

// 3 syntaxes for functions
// function declaration (old) - these kind of functions are created before the script execution phase
function sum1( x, y ) {
    let result = x + y;
    return result;
}

const result = sum1( 12, 13 );
console.log( result );

// sum2 is undefined when this line executes
// console.log( sum2( 10, 20 ) ); // error

// function expression (old) - created Just-in-time (JIT)
// till this line, the variable sum2 will be undefined. The functin gets created and assigned to sum2 when this line of code executes
const sum2 = function( x, y ) {
    return x + y;
};

console.log( sum2( 12, 13 ) );

// arrow function (ES2015)