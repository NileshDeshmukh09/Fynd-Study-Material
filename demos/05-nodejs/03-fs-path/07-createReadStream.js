const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "meetings-app.pdf");

// file reading starts
const rs = fs.createReadStream(filePath);

let count = 0;

// when a chunk of file is read, the function is called
rs.on("data", chunk => {
    console.log( chunk );
    count++;
});

rs.on( 'end', () => {
    console.log( 'number of chunks read = ', count );
});