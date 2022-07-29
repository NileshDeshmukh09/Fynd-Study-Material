// import http from 'http';
const http = require("http");

// asynchronous non-blocking function
const server = http.createServer((req, res) => {
  res.end("Hello Node");
});

server.listen(8080);
