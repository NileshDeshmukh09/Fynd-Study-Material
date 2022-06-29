const persons = [
    {
        name: 'John',
        salary: 1000,
        age: 32,
        emails: [
            'john@gmail.com',
            'john@fynd.com'
        ]
    },
    {
        name: 'Jane',
        age: 28,
        salary: 2000,
        emails: [
            'jane@gmail.com',
            'jane@fynd.com',
            'jane@yahoo.com',
        ]
    },
    {
        name: 'Mark',
        age: 46,
        salary: 3000,
        emails: [
            'mark@gmail.com',
            'mark@fynd.com'
        ]
    },
    {
        name: 'Mary',
        age: 44,
        salary: 4000,
        emails: [
            'mary@gmail.com',
            'mary@fynd.com'
        ]
    }
];

// const mAged = persons.filter( p => p.age >= 35 );
// const mAgedNames = mAged.map( p => p.name );
// console.log( mAgedNames );

const mAgedNames = persons
                    .filter( p => p.age >= 35 )
                    .map( p => p.name );
console.log( mAgedNames );