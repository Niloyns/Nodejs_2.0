// Window vs Global Object in JavaScript

// 'window' is the global object in browsers.
// It gives access to browser-specific APIs like alert, prompt, document, etc.
// ❌ This will throw an error in Node.js because 'window' doesn't exist there.
// console.log(window); // Use this only in browser

// 'global' is the global object in Node.js.
// It provides access to Node-specific global functions and properties. like process, setTimeout, etc.
console.log(global); // ✅ Works in Node.js only

// 'globalThis' is the universal global object.
// ✅ Works in both the browser and Node.js.
// In browsers: globalThis === window
// In Node.js:  globalThis === global
console.log(globalThis);
