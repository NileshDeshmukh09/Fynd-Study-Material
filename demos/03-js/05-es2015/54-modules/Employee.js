import Human, { RelationshipStatus as RS } from './Person.js';

console.log( RS[0] );

class Employee extends Human {
    // if no constructor is provided, a default constructor will call Person constructor, and pass it whatever it receives
    constructor( name, age, role, dept ) {
        super( name, age );
        
        this.role = role;
        this.dept = dept;
    }

    promote() {
        this.role = `Senior ${this.role}`;
        return this.role;
    }

    celebrateBirthday() {
        console.log( `Happy birthday ${this.name}` );
        super.celebrateBirthday();
    }
}

export {
    Employee
};