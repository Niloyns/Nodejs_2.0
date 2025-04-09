// synchronously fs core module

// require fs core module
let fs = require("fs");

// make Folder
fs.mkdirSync("file");

// create file synchronously using fs module
fs.writeFileSync("./file/test.txt", "hello World");

// if this file already exists, it will replace its content
fs.writeFileSync("./file/test.txt", "hello Coder");

// append data to existing file
fs.appendFileSync("./file/test.txt", "\nhello Programmer");

// read file (returns buffer data)
let data = fs.readFileSync("./file/test.txt");
console.log(data); // <Buffer 68 65 6c 6c 6f 20 43 6f 64 65 72 0a 68 65 6c 6c 6f 20 50 72 6f 67 72 61 6d 6d 65 72>

// convert buffer data to string (not recommended way)
let org_Data = data.toString();
console.log(org_Data);

//convert buffer data to string (recommended way)
let fileData = fs.readFileSync("./file/test.txt", "utf8");
console.log(fileData);

// rename file
fs.renameSync("./file/test.txt", "./file/read.txt");

//Remove folder
// fs.rmdirSync("./file");
