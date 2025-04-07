// ------------------------ OS Module Notes ------------------------ //

// Import the built-in 'os' module to access system information
const os = require('os');

// os.arch(): Returns the CPU architecture (e.g., 'x64')
console.log("CPU Architecture:", os.arch());

// os.platform(): Returns the platform (e.g., 'win32', 'linux')
console.log("Platform:", os.platform());

// os.hostname(): Returns the hostname of the operating system
console.log("Hostname:", os.hostname());

// os.type(): Returns the OS name (e.g., 'Windows_NT')
console.log("OS Type:", os.type());

// os.uptime(): Returns the system uptime in seconds
console.log("System Uptime (seconds):", os.uptime());

// os.totalmem(): Returns total memory in bytes
console.log("Total Memory:", os.totalmem());

// os.freemem(): Returns free memory in bytes
console.log("Free Memory:", os.freemem());

// os.cpus(): Returns an array of CPU/core details
console.log("CPU Info:", os.cpus());

// os.networkInterfaces(): Returns network interfaces details
console.log("Network Interfaces:", os.networkInterfaces());
