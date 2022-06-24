// how to choose between const and let
// const (first choice), let (second choice)

/* primitive data types - boolean, string, number (int/float) */
/* implicitly typed language */
/* interpreted language */
var price = 100;
var name = 'John'; // '' or "", escape sequence - \', \"

// can lead to bug
var price = 200; // taken as reassignment

if( true ) {
    var isMonsoon = true; // var variables do not have "block scope"
}

console.log( isMonsoon );

let quantity = 5;
// let quantity = 10; // cannot redeclare
if( true ) {
    let greeting = 'Jai Mata di'; // block-scoped variable
    console.log( greeting );
}

// console.log( greeting ); // error - not available globally

const PI = 3.14;
// PI = 3.15; // error