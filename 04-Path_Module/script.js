// path module built-ins: __dirname and __filename

// __dirname gives the full path of the directory where the current file is located
console.log(__dirname); // Example: /Users/yourname/project

// __filename gives the full path including the current file name
console.log(__filename); // Example: /Users/yourname/project/script.js

// To use the path module, we must import it first
const path = require('path');

// path.join joins all given path segments together correctly
const filePath = path.join("folder", "student", "file.txt");
console.log(filePath); // Output: folder/student/file.txt (correctly formatted for OS)

// path.parse returns an object with root, dir, base, ext, name
const parseData = path.parse(filePath);

// path.resolve returns an absolute path from begining
const resolvedPath = path.resolve(filePath);

// path.extname returns the file extension
const extname = path.extname(filePath);

// path.basename returns the file name with extension
const basename = path.basename(filePath);

// path.dirname returns the directory path
const dirname = path.dirname(filePath);

// Display all values in a table for better view
console.log({parseData, resolvedPath, extname, basename, dirname});
