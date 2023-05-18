// User Modules
////////////////////////////////////////

// const { add, sub, divide } = require("./utils");

// Built-in Modules
////////////////////////////////////////
const path = require("path");
const fs = require("fs");

// console.log(add(4, 3));
// console.log(sub(4, 3));
// console.log(divide(10, 2));

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.parse(__filename));



// create a file : run code only once then comment
////////////////////////////////////////

fs.mkdir('./NewFolder', (err) => {
    (err)
        ? console.log(err)
        : console.log("Success : Folder Created.\n");
});


// writeFile
////////////////////////////////////////////////////////

const data = "This is a plain text.\n";
fs.writeFile('./NewFolder/NewFile.txt', data, (err) => {
    err ? console.log(err) : console.log("Success : File created.\n");
});


// Append file
////////////////////////////////////////////////////////

const appendData = "This is an appended text.\n";
fs.appendFile('./NewFolder/NewFile.txt', appendData, (err) => {
    err ? console.log(err) : console.log("Success: Text appended to file.\n");
});

// Read file after appending
////////////////////////////////////////////////////////

fs.readFile('./NewFolder/NewFile.txt', { encoding: 'utf8' }, (err, data) => {
    err ?
        console.log(err) :
        console.log("\n------- START OF READ FILE-----------\n");
    console.log(data);
    console.log("\n------- END OF READ FILE-----------\n");
});

// Read files in the directory
////////////////////////////////////////////////////////

fs.readdir('./NewFolder', (err, files) => {
    err ? console.log(err) : console.log(files, "=== Files inside the directory \n");
});

// Rename files in the directory
////////////////////////////////////////////////////////

fs.rename('./NewFolder/NewFile.txt', './NewFolder/NewFileAsync.txt', (err) => {
    err ? console.log(err) : console.log("Success : Renamed the file");
});

// Read files in the directory after renaming
////////////////////////////////////////////////////////

fs.readdir('./NewFolder', (err, files) => {
    err ? console.log(err) : console.log(files, "=== Files inside the directory after renaming.\n");
});