// Basic array methods

// reverse()
const primes = [  2, 3, 5, 7, 11, 13 ];
primes.reverse(); // mutates the original array
console.log( primes );

// concat() -> join 2 or more arrays
const composites = [ 4, 6, 8, 9, 10, 12 ];
const primesAndComposites = primes.concat( composites ); // does not mutate either array
console.log( primesAndComposites );

console.clear();

// push() -> add to end of array
// shift() -> remove from the start of array
const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
nums.shift();
console.log( nums );

// pop() -> remove from end of array
nums.pop();
console.log( nums );
// unshift( item ) -> add to the start of array
// explore

// splice() -> add / remove items at any position in the array
// explore it now
// starting form index 2, remove 3 items
nums.splice( 2, 3 );
console.log( nums );

// add 5, 6, 6.5 after the number 3 ( idx = 1. So we give 1 + 1 = 2 )
nums.splice( 2, 0, 5, 6, 6.5 );
console.log( nums );

// nums.splice( nums.length - 1, 1, 100, 200, 300 );

// slice() -> gets a portion of array
console.log( nums.slice( 1, 4 ) ); // returns a new array

// join() -> concatenate string items in array
console.log( [ 'hello', 'world', 'how', 'are', 'you' ].join( ' ' ) );

console.clear();

// sort()
const words = [ 'hello', 'world', 'how', 'are', 'you' ]
words.sort();
console.log( words );

const numbers = [ 10, 40, 30, 100, 400, 33, 340 ];
// RULES FOR THE HELPER FUNCTION FOR sort()
// if a should come before b in sorted order, return a -ve number
// if a should come after b in sorted order, return a +ve number
// if a and b are to be treated as equal, return 0
// a = 30, b = 100, return -70; So 30 will be placed before 100
numbers.sort(
    ( a, b ) => {
        if( a < b ) {
            return -1;
        }

        if( a > b ) {
            return 1;
        }

        return 0;
    }
);
// numbers.sort( ( a, b ) => a - b );
console.log( numbers );