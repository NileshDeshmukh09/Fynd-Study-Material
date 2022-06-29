const price = '500';
const priceNum = parseInt( price );

console.log( priceNum );
console.log( typeof priceNum ); // 'number'

const PI = '3.14';
const PINum = parseFloat( PI );
console.log( PINum ); // 3.14

console.log( parseInt( 'abcd' ) ); // NaN

console.log( parseInt( 'abcd' ) === NaN ); // false (crazy!)
console.log( isNaN( parseInt( 'abcd' ) ) ); // true
console.log( isNaN( NaN ) ); // true

const sqrt2 = 1.4142;
console.log( sqrt2.toFixed( 2 ) ); // rounding will be done