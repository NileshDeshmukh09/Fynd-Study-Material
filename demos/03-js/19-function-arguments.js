function foo( x, y, z ) {
    console.log( 'x = ', x );
    console.log( 'y = ', y );
    console.log( 'z = ', z );

    console.log( arguments ); // "array-like object"
    console.log( arguments.length ); // the number of arguments
    console.log( arguments['0'] );
    console.log( arguments[1] );
    console.log( arguments[2] );
    console.log( arguments[3] );
}

// arguments -> { '0': 12, '1': 13, length: 2 }
foo( 12, 13 ); // z is undefined

// arguments -> { '0': 12, '1': 13, '2': 14, '3': 15, length: 4 }
foo( 12, 13, 14, 15 ); // arguments.length is 4