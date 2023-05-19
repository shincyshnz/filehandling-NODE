const fs = require("fs");

// Create Folder 
try {
    fs.mkdirSync('./myFolder');
    console.log("Success : Folder Created\n");
} catch (err) {
    console.log(err.message);
}

// Write or Create File
try {
    fs.writeFileSync('./myFolder/myFile.text', "This is a plain text.\n");
    console.log("Success : File Created\n");
} catch (err) {
    console.log(err.message);
}

// Write or Read File
try {
    const data = fs.readFileSync('./myFolder/myFile.text', { encoding: "utf8" });
    console.log(data, "\n");
    console.log("Success : ---------Read Completed-------\n");
} catch (err) {
    console.log(err.message);
}

// Delete Folder 
try {
    fs.rmdirSync('./myFolder');
    console.log("Success : Folder Deleted\n");
} catch (err) {
    console.log(err.message);
}