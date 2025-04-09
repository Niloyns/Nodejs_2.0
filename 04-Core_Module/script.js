/*
📌 What is a Core Module in Node.js?

Core modules are built-in modules provided by Node.js. 
They come bundled with Node.js installation and do not require separate installation (no npm install needed).

They help with common tasks like:
- File system access
- Creating web servers
- Working with operating system data
- Handling URLs and paths
*/

// 🔹 'fs' (File System): Read/write files
const fs = require("fs");

// 🔹 'path': Work with file/directory paths
const path = require("path");

// 🔹 'os': Get info about operating system (CPU, memory, platform, etc.)
const os = require("os");

// 🔹 'url': Parse and work with URLs
const url = require("url");

// 🧪 2. Using os - Print system information
console.log("\n💻 System info:");
console.log("OS Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory:", os.totalmem(), "bytes");
console.log("Free Memory:", os.freemem(), "bytes");

// 🧪 3. Using url - Parse a URL string
const siteUrl = "https://example.com/user/profile?id=123&name=Niloy";
const parsedUrl = url.parse(siteUrl, true);

console.log("\n🌐 Parsed URL:");
console.log("Host:", parsedUrl.host);
console.log("Path:", parsedUrl.pathname);
console.log("Query Params:", parsedUrl.query); // { id: '123', name: 'Niloy' }
