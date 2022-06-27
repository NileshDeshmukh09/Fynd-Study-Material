function foo1( x ) {
    let y = 100;

    bar();

    function bar() {
        console.log( 'i am bar within foo1' );
        console.log( 'x = ', x );
        console.log( 'y = ', y );
    }
}

foo1( 10 ); // bar gets created, then destroyed
foo1( 20 ); // bar gets created, then destroyed
foo1( 30 ); // bar gets created, then destroyed