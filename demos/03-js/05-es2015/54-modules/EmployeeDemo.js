// npm init -y

// Set this in package.json
// "type" : "module"
import { Employee } from './Employee.js';
// import { Person } from './Person.js';


const john = new Employee( 'John', 32, 'Accountant', 'Finance' );
john.promote();
john.celebrateBirthday();
console.log( john );