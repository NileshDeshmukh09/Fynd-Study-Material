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

const RelationshipStatus = [
    'Single',
    'Married',
    'Committed',
    'It is complicated'
];

export {
    Person,
    RelationshipStatus
};