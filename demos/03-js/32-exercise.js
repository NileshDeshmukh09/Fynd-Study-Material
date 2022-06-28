// create this function
const filter = () => {

};

// x => x % 2 === 1 returns true when x is odd
filter( [ 1, 4, 7, 2, 9, 11, 41, 34 ], x => x % 2 === 1 ); // [ 1, 7, 9, 11, 41 ]

// x => x % 2 === 1 returns true when x is even
filter( [ 1, 4, 7, 2, 9, 11, 41, 34 ], x => x % 2 === 0 ); // [ 4, 2, 34 ]

// x => x % 3 === 0 returns true when x is a multiple of 3
filter( [ 1, 4, 7, 2, 9, 11, 41, 34 ], x => x % 3 === 0 ); // [ 9 ]

// x => x % 4 === 0 returns true when x is a multiple of 4
filter( [ 1, 4, 7, 2, 9, 11, 41, 34 ], x => x % 3 === 0 ); // [ 4 ]