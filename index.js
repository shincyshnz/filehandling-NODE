// Modules
const { add, sub, divide } = require("./utils");
const path = require("path");
const fs = require("fs");
const { log } = require("console");


console.log(add(4, 3));
console.log(sub(4, 3));
console.log(divide(10, 2));

console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.parse(__filename));



// create a file 
fs.mkdir('./ NewFolder', (err) => {
    (err)
        ? console.log(err)
        : console.log("Folder Created Successfully");
});

// writeFile
const data = "This is newFile.txt";
fs.writeFile('./NewFolder/NewFile.txt', data, (err) => {
    err ? console.log(err) : console.log("File created");
});