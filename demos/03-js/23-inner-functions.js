// foo1 is created before this script starts execution

// bar within foo1 is created only when foo1 starts executing
// bar is destroyed when foo1 finishes executing
// Moral of the story: Inner functions are "local" to the function
function foo1() {
    bar();

    function bar() {
        console.log( 'i am bar within foo1' );
    }
}

foo1(); // bar gets created, then destroyed
foo1(); // bar gets created, then destroyed
foo1(); // bar gets created, then destroyed