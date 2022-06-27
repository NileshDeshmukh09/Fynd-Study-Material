function foo( x, y, z ) {
    console.log( 'x = ', x );
    console.log( 'y = ', y );
    console.log( 'z = ', z );

    // { 0: 12, 1: 13, 2: 14, 3: 15, length: 4 }
    console.log( arguments ); // "array-like object"
    console.log( arguments.length ); // the number of arguments
    console.log( arguments[0] );
    console.log( arguments[1] );
    console.log( arguments[2] );
    console.log( arguments[3] );
}

foo( 12, 13 ); // z is undefined
foo( 12, 13, 14, 15 ); // arguments.length is 4