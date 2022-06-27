'use strict';

// We are not dealing with "var" variables
let x = 1;
// a = 100; // creates a global variable

function outer() {
    let x = 2; // scoped to outer function
    let y = 1; // scoped to outer function
    console.log( '[outer] x = ', x ); // 2 (local x)
    console.log( '[outer] y = ', y );

    function inner() {
        let x = 3; // scoped to inner function
        let z = 3; // scoped to inner function
        
        // when you do not use let/const etc. you end up creating global variable
        // do not do this
        a = 100; // creates a global variable
        
        console.log( '[inner] x = ', x ); // 3
        console.log( '[inner] y = ', y ); // 1
    }

    inner();
    // console.log( '[inner] z = ', z ); // error
}

console.log( '[global] x = ', x );

outer();

// console.log( '[global] y = ', y );
console.log( '[global] a = ', a );