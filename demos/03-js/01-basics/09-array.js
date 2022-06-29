// 'use strict';

// Whenever we use [] we are creating an array in memory
const primes = [ 2, 3, 5, 7, 11, 13 ];
console.log( primes );

console.log( primes[0] );
console.log( primes[5] );
console.log( primes[6] ); // undefined

primes[0] = primes[1] * primes[2];

console.log( primes );

console.log( primes.length ); // 6
console.log( primes[primes.length - 1] );

primes[primes.length] = 17;
console.log( primes );

// primes = [ 2, 4, 6, 8, 10 ]; // error (We used const for the array)

console.clear();

// array need not have items of the same type
const phoneNumbers = [
    123456,
    '123-456-789'
];

console.log( phoneNumbers );

console.clear();

const weekdays = Object.freeze([
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
]);

weekdays[0] = 'Sun'; // fails silently in non-strict mode

console.log( weekdays );