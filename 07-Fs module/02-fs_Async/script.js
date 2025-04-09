// Asynchronous fs core module

// Require fs core module
let fs = require("fs");

// Create folder asynchronously
fs.mkdir("file", (err) => {
  if (err) return console.error("Folder creation error:", err);
  console.log("Folder created");
});

// Create asynchronous file
fs.writeFile("./file/text.txt", "Hello", (err) => {
  if (err) return console.error("File creation error:", err);
  console.log("File created");
});

// Append data to the file
fs.appendFile("./file/text.txt", " Hello World", (err) => {
  if (err) return console.error("Append error:", err);
  console.log("Data appended");
});

// Read file data
fs.readFile("./file/text.txt", "utf8", (err, data) => {
  if (err) return console.error("Read error:", err);
  console.log("File content:", data);
});

// Rename the file
fs.rename("./file/text.txt", "./file/data.txt", (err) => {
  if (err) return console.error("Rename error:", err);
  console.log("File renamed");
});

// Delete the renamed file
fs.unlink("./file/data.txt", (err) => {
  if (err) return console.error("File delete error:", err);
  console.log("File deleted");
});

// Delete the folder
fs.rmdir("./file", (err) => {
  if (err) return console.error("Folder delete error:", err);
  console.log("Folder deleted");
});
