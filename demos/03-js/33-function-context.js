// "this" -> called "function context"
// "global" (Node JS) / "window" (browser)
function foo() {
    console.log( this );
}

foo(); // "this" -> global / window

// the same function can have different contexts based on how it is called
// john.bar = foo; // john.bar and foo refer to the SAME function in memory
const john = {
    name: 'John',
    bar: foo
};

john.bar(); // "this" -> john

// this will check what each refers to and hence prints true 
console.log( john.bar === foo ); // true