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

// const name = john.name, age = john.age, firstEmail = john.emails[0], sonu = john.children[0], monu = john.children[1], city = john.address.city, area = john.address.area;

const {
    age,
    name,
    spouse = 'Single',
    address: {
        city,
        area
    },
    emails: [
        firstEmail
    ]
} = john;

console.log( name, age, spouse, city, area, firstEmail );