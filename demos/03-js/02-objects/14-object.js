// objects can be created without explicitly creating a class
// let us use the "object literal syntax" - when we use {}, we create an object in memory
// The variable john is a reference to the object in memory
// keys are always string
const john = {
    'name': 'John', // properties
    age: 32,
    emails: [
        'john@gmail.com',
        'john@fynd.com'
    ],
    children: [
        'Jack',
        'Jill'
    ],
    address: {
        city: 'Mumbai',
        area: 'Bandra',
        pinCode: 400010
    }
};

console.log( john );
console.log( john.name ); // 'John'
console.log( john.address.city ); // 'Mumbai'
console.log( john.emails[1] ); // 'john@fynd.com'

console.log( john['emails'][1] ); // 'john@fynd.com'

let key = 'emails';
let idx = 0;
console.log( john[key][idx] ); // 'john@gmail.com'

key = 'children';
idx = 1;
console.log( john[key][idx] ); // 'Jill'

john.age++; // age can be increased (even though john is const)
console.log( john );

// john = { // error - john is const (cannot reassign)
//     name: 'Jonathan'
// };

// john.children[john.children.length] = 'Jamie';
// push() can be used to add to the end of an array
john.children.push( 'Jamie' );
console.log( john );

// objects are "dynamic" (Add / Remove properties at runtime)
john.spouse = 'Jane';
console.log( john );

delete john.age;
console.log( john );