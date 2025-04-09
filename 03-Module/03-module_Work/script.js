// Module Wrapper in Node.js

/**
 * Node.js uses a function wrapper around every module behind the scenes:
 *
 * (function (exports, require, module, __filename, __dirname) {
 *     // Your entire file code lives here
 * });
 *
 * This is called the **Module Wrapper Function**.
 * It provides a private scope for each module so variables don’t leak to the global scope.
 *
 * Parameters explained:-
 * --   exports: shortcut to export things from a module
 * --   require: to import other modules
 * --   module: refers to the current module (where you can export anything)
 * --   __filename: full path of the current file
 * --   __dirname: directory path of the current module
 */

(function (exports, require, module, __filename, __dirname) {
  // This is how your code is wrapped internally
  var name = "Niloy";
  console.log(name); // Output: Niloy
});
