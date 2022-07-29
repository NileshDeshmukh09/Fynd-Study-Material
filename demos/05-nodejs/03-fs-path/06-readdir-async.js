const fs = require("fs/promises");

fs.readdir(__dirname)
    .then((listOfFiles) => {
        console.log(listOfFiles);
    })
    .catch((error) => {
        console.error(error.message);
    });
