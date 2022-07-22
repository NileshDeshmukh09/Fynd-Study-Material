// details of the running process - BIG object
// console.log( process );
const http = require("http");

// current working directory - where in the terminal was it launched from
console.log( process.cwd() );

// process id
console.log( process.pid );

// if you use this mechanism then make sure your errors do not go unnoticed - for example you can log the errors to a separate file
process.on( 'uncaughtException', error => {
    console.error( error.message ); // better save the error message to a file
    // process.exit(0);
});

const server = http.createServer((req, res) => {
    res.end("Hello Node");
    foo(); // error!
});

server.listen(8080);