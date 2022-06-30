// Exercise: Explore static data member, methods
class Person {
    nationality = 'Indian';
    relationshipStatus = 'Single';

    constructor( name, age ) {
        console.log( this ); // newly created object
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    }

    marry( person ) {
        this.spouse = person;
        this.relationshipStatus = 'Married';
     
        person.spouse = this;
        person.relationshipStatus = 'Married';
    }
}

const john = new Person( 'John', 32 );
john.celebrateBirthday();
console.log( john );

const jane = new Person( 'Jane', 28 );
jane.celebrateBirthday();
console.log( jane );

john.marry( jane );

console.clear();

console.log( john );
console.log( jane );