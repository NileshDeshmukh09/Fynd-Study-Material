const name = 'John', age = 32, emails = [ 'john@gmail.com', 'john@fynd.com' ], address = { 
    city: 'Mumbai',
    area: 'Worli'
};

const spouseKey = 'wife';
const wife = 'Jane';

const john = {
    // name: name,
    // age: age,
    // emails: emails,
    name,
    age,
    emails,
    residence: address,
    [spouseKey]: wife
};

console.log( john );