class Person {
    nationality = 'Indian';
    relationshipStatus = 'Single';

    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    }
}

class Employee extends Person {
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

const john = new Employee( 'John', 32, 'Accountant', 'Finance' );
john.promote();
john.celebrateBirthday();
console.log( john );