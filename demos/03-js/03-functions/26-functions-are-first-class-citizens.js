// Whatever we can do with objects, we can do with functions
function getPerson( name, age ) {
    let person = {
        name: name,
        age: age
    };

    return person;
}

const john = getPerson( 'John', 32 ); // copied by reference
console.log( john );

function getFoo() {
    function foo() {
        console.log( 'i am foo' );
    }

    // we are returning the function
    // the name of a function is a reference to the function
    return foo;
}

const bar = getFoo(); // functions are copied by reference
console.log( bar ); // Function
bar();

const car = bar; // function copied by reference
car();