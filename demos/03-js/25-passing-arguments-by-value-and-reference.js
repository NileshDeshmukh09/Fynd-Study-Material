function printOneMore( x ) {
    x = x + 1;
    console.log( 'x = ', x );
}

let a = 100;
printOneMore( a ); // x = a (copied by value)
console.log( 'a = ', a ); // 100

function printPerson( person ) {
    person.age++;
    console.log( `${person.name} is ${person.age} years old` );
};

let john = {
    name: 'John',
    age: 32
};

printPerson( john ); // person = john (copied by reference)
console.log( `${john.name} is ${john.age} years old` );