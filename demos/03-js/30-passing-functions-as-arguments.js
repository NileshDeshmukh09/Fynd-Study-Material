function printPerson( person, titlemaker ) {
    const { name, age, gender } = person; // destructuring syntax (more later!)

    console.log( `${titlemaker( person )} ${name} is ${age} years old` );
    // console.log( `${name} will ${age + 1} years old next year` );
    // console.log( `${name} will ${age + 2} 2 years later` );
    // printPerson( person.spouse, titlemaker );
}

function getTitle( person ) {
    return person.gender === 'male' ? 'Mr.' : ( person.status === 'married' ? 'Mrs.' : 'Ms.' );
}

const getFrenchTitle = person => person.gender === 'male' ? 'Monsieur' : 'Mademoiselle';

const john = { // 1st argument (object)
    name: 'John',
    gender: 'male',
    age: 32,
    status: 'married'
};

const jane = {
    name: 'Jane',
    gender: 'female',
    age: 28,
    status: 'married',
    spouse: john
};

john.spouse = jane;

printPerson(
    john,
    getFrenchTitle // 2nd argument (function)
);

printPerson(
    jane,
    getTitle // 2nd argument (function)
);