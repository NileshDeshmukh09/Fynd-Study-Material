// rest (...) / spread (...)

// 1. to gather remaining arguments in a function parameter list
// a replacement for using arguments objects
function sum( transform, ...args  ) {
    // for( let i = 1; i < arguments.length; i++ ) {

    // }

    return args.reduce( ( acc, item ) => acc + item );
}

let result;

result = sum( x => x * x, 1, 2 ); // args -> [ 1, 2 ]
console.log( result );

result = sum( x => x * x * x, 1, 2, 4, 7 ); // args -> [ 1, 2, 4, 7 ]
console.log( result );

result = sum( Math.sqrt, 1, 2, 4, 7, 8 ); // transform -> Math.sqrt, args -> [ 1, 2, 4, 7, 8 ]
console.log( result );


// 2. during array destructuring
const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

const [ mon, tue, ...restOfDays ] = weekdays;
console.log( restOfDays ); // [ 'Wednesday', 'Thursday', 'Friday' ]


// 3. during object destructuring
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

const {
    name,
    address: {
        city,
        ...restOfAddress
    },
    ...restOfDetails
} = john;

console.log( restOfDetails, restOfAddress );