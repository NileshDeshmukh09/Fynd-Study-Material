// spread (...)
const nums = [ 1, 2, 3 ];

// use it on an array
// primtive items will get copied by value
const nums2 = [ ...nums ]; // [ nums[0], nums[1], nums[2] ]
nums2[0]++;
nums2.push( 4 );

console.log( nums ); // [ 1, 2, 3 ]
console.log( nums2 ); // [ 2, 2, 3, 4 ]

const persons = [
    { name: 'John', age: 32 },
    { name: 'Jane', age: 28 },
    { name: 'Mark', age: 40 }
];

// non-primitives (like objects) will get copied by reference
const persons2 = [ ...persons ]; // [ persons[0], persons[1], persons[2] ]
persons2[0].age++;
persons2.push({
    name: 'Mary',
    age: 44
});

console.log( persons ); // does not have mary
console.log( persons2 ); // has mary

const arr1 = [ 1, 2, 3 ], arr2 = [ 4, 5, 6 ];
const arr3 = [ -3, -2, -1, 0, ...arr1, 3.25, 3.5, 3.75, ...arr2, 7, 8, 9 ];
console.log( arr3 );