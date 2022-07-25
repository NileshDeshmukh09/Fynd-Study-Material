// first 2 arguments are node and the script path
console.log(process.argv);
console.log(process.argv[2]);
console.log(process.argv[3]);

const a = parseInt(process.argv[3]);
const b = parseInt(process.argv[4]);
switch (process.argv[2]) {
    case "add":
        console.log(a + b);
        break;
    case "substract":
        console.log(a - b);
        break;
    case "multiply":
        console.log(a * b);
        break;
    case "divide":
        console.log(a / b);
        break;
}
