// Coverting JSON formatted string -> JS object / array
// JavaScript Object Notation (JSON)
// format for text (data-interchange format)

// key must be strings (double-quoted)
// value -> number, boolean, string (double-quoted), object, array, null
// generally, at the top-level you will find object / array

const personsJSON = `[
    {
        "name": "John",
        "salary": 1000,
        "age": 32,
        "emails": [
            "john@gmail.com",
            "john@fynd.com"
        ]
    },
    {
        "name": "Jane",
        "age": 28,
        "salary": 2000,
        "emails": [
            "jane@gmail.com",
            "jane@fynd.com",
            "jane@yahoo.com"
        ]
    },
    {
        "name": "Mark",
        "age": 46,
        "salary": 3000,
        "emails": [
            "mark@gmail.com",
            "mark@fynd.com"
        ]
    },
    {
        "name": "Mary",
        "age": 44,
        "salary": 4000,
        "emails": [
            "mary@gmail.com",
            "mary@fynd.com"
        ]
    }
]`;

const personsArr = JSON.parse( personsJSON );

console.log( personsArr );

// do whatever modifications
personsArr[1].salary = 2500;

// convert the data back to string and send it to the server
const personsJSONUpdated = JSON.stringify( personsArr, null, 4 );
console.log( personsJSONUpdated );