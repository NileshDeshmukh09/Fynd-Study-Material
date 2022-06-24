const persons = [
    {
        name: 'John',
        age: 32,
        emails: [
            'john@gmail.com',
            'john@fynd.com'
        ]
    },
    {
        name: 'Jane',
        age: 28,
        emails: [
            'jane@gmail.com',
            'jane@fynd.com'
        ]
    },
    {
        name: 'Mark',
        age: 40,
        emails: [
            'mark@gmail.com',
            'mark@fynd.com'
        ]
    }
];

console.log( persons[1].name );

// add an email for the third person
persons[2].emails.push( 'mark@yahoo.com' );

console.log( persons );