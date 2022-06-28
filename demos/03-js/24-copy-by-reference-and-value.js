// primitives (number/boolean/string) are copied by value
let x = 1;
let y = x; // value of x got "copied" to y (copy by value)

y++;

console.log( 'x = ', x ); // 1
console.log( 'y = ', y ); // 2

// non-primitives (array/object/function) are copied by reference
let a = [ 1, 2, 3, 4 ];
let b = a; // b and a refer to the SAME array in memory (copy by reference)
b.push( 5 );

console.log( 'a = ', a ); // [ 1, 2, 3, 4, 5 ]
console.log( 'b = ', b ); // [ 1, 2, 3, 4, 5 ]

const c = [];
for( let i = 0; i < a.length; i++ ) {
    c.push( a[i] ); // copt by value of items, since items are primtive (numbers)
}

let john = {
    name: 'John',
    age: 32
};

let jonathan = john; // jonathan and john refer to the same object in memory
jonathan.name = 'Jonathan';

console.log( 'john = ', john );
console.log( 'jonathan = ', jonathan );