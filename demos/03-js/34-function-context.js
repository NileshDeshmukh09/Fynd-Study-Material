const john = {
    name: 'John',
    printName() {
        console.log( this.name );
    }
}

john.printName(); // "this" -> john; prints 'John'

const pn = john.printName; // pn and john.printName refer to the SAME function in memory
console.log( pn === john.printName ); // true

pn(); // "this" -> global / window; does not print 'John' (global.name)