// NPM

/**
 * What is NPM?
 * - NPM stands for Node Package Manager.
 * - It helps developers install and manage third-party packages or modules in Node.js projects.
 * - Examples: chalk, express, validator, lodash, etc.
 *
 * How to Set Up NPM:
 * 1️⃣ Open terminal in your project folder
 * 2️⃣ Run: npm init -y
 *    - This creates a default package.json file
 * 3️⃣ Install packages (e.g., chalk, validator):
 *    - Run: npm install chalk validator
 * 4️⃣ To use ES Modules (import/export), update package.json:
 *    {
 *      "type": "module"
 *    }
 */

// Importing packages (works only if "type": "module" is set in package.json)
import chalk from "chalk";
import validator from "validator";

// Using chalk to print colorful messages in terminal
console.log(chalk.red("Hello world!")); // red text
console.log(chalk.green("Success!")); // green text
console.log(chalk.bgBlue.white("Info")); // white text with blue background

// Using validator to check if string is a valid email
let result = validator.isEmail("foo@bar.com"); // return true/false
console.log(
  result ? chalk.bold.green.inverse(result) : chalk.bold.red.inverse(result)
);
