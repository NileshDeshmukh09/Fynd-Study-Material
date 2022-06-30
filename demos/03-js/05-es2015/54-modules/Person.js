/*export default */class Person {
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

/*export */const RelationshipStatus = [
    'Single',
    'Married',
    'Committed',
    'It is complicated'
];

export {
    Person as default, // only 1 default export can be there in a module
    RelationshipStatus // named export
}

// export {
//     Person,
//     RelationshipStatus
// };