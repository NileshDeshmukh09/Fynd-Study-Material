const square = x => x * x;
const cube = x => x * x * x;

function sum( x, y, oper ){
    return oper( x ) + oper( y );
}

console.log( sum( 2, 3, square ) ); // oper = square
console.log( sum( 2, 3, cube ) ); // oper = cube
console.log( sum( 2, 3, Math.log ) ); // oper = Math.log
console.log( sum( 2, 3, Math.sqrt ) ); // oper = Math.sqrt

// write sumArray...
const sumArray = ( arr, oper ) => {
    let result = 0;

    for( let i = 0; i < arr.length; i++ ) {
        result += oper( arr[i] );
    }

    return result;
};

console.log( sumArray( [ 1, 2, 3 ], square ) ); // 14, oper = square
console.log( sumArray( [ 1, 2, 3 ], cube ) ); // 36, oper = cube