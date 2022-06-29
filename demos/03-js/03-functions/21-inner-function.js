// foo1 and foo2 are created before this script starts execution

// bar within foo1 is created only when foo1 starts executing
// bar is destroyed when foo1 finishes executing
// Moral of the story: Inner functions are "local" to the function
function foo1() {
    bar();

    function bar() {
        console.log( 'i am bar within foo1' );
    } 
}

function foo2() {
    bar();
    
    function bar() {
        console.log( 'i am bar within foo2' );
    }
}

foo1(); // creates a local "bar" function temporarily
foo2(); // creates a local "bar" function temporarily