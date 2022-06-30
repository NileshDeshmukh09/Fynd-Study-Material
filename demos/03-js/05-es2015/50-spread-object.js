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
        pinCode: 400010,
    }
};

const johnEmployment = {
    name: 'Jonathan',
    company: 'Fynd',
    role: 'Web Developer',
    dept: 'Retail'
}

// name will come from johnEmployment (last one)
const john2 = {
    // name: john.name, age: john.age, emails: john.emails, children: john.children, address: john.address, name: je.name, company: je.company, and so on
    ...john,
    interests: [ 'Reading', 'Cooking' ],
    ...johnEmployment,
    spouse: 'Jane'
};
john2.age++; // john.age is still 32
john2.emails[0] = 'john.doe@gmail.com'; // it will change john.emails[0]

console.log( john );
console.log( john2 );

// let us make a proper cop (deep copy)
const john3 = {
    ...john,
    emails: [
        ...john.emails
    ],
    children: [
        ...john.children
    ],
    address: {
        ...john.address
    }
};
john3.age++;
john3.children[0] = 'Jackson';

console.clear();

console.log( john );
console.log( john3 );