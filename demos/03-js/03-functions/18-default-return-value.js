// When a function completes without explcitly returning, it returns undefined
function foo() {
    console.log( 'foo is called' );
    // return undefined; // implicit return statement
}

const result = foo();
console.log( 'result = ', result );