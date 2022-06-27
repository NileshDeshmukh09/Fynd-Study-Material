function foo1( x ) {
    let y = 100;

    function bar() {
        console.log( 'i am bar within foo1' );
        console.log( 'x = ', x );
        console.log( 'y = ', y );
    }

    return bar;
}

// the local x1, y1 which are created will continue to be in memory
// "closure" -> the set of variables available to a function
const bar1 = foo1( 10 ); // bar gets created afresh - x1, y1 are in the "closure" of bar1

// the local x2, y2 which are created will continue to be in memory
const bar2 = foo1( 20 ); // another bar gets created afresh

const bar3 = foo1( 30 ); // another bar gets created afresh

bar1(); // prints x1, y1 without any problems
bar2(); // prints x2, y2 without any problems