//require the package name : require will return alll of the stuff that the validator package provides us .

const validator = require('validator'); // to use it , see documentation

const getNotes = require('./notes.js');

const msg = getNotes();

console.log(msg);

console.log(validator.isEmail('invalidEmail'));
console.log(validator.isEmail('sa_ba_1997@gmail.com'));
console.log(validator.isEmail('sa_bad_1997@gmdail.com'));
console.log(validator.isEmail('example.com'));

console.log("------------------");

console.log(validator.isURL("https://tkharbi9.com"));
console.log(validator.isURL("http://tkharbi9.com"));
console.log(validator.isURL("http://tkharbi9."));
console.log("------------------------------------");
//load chalk into app.js
//for npm packages we load modules into our code by using package name.
const chalk  = require('chalk');
console.log(chalk.green("SUCCESS!"));
console.log(chalk.yellow("WARNING!"));
console.log(chalk.red("FAILED!"));

console.log(chalk.blue.bgRed.bold('Hello world!'));

console.log(chalk.green.bgWhite.bold("SUCCESS!"));
console.log(chalk.yellow.bgWhite.bold("WARNING!"));
console.log(chalk.red.bgWhite.bold("FAILED!"));

const greenMsg = chalk.green.bold("Green Hello"); // or chalk.bold.green
console.log(greenMsg);

const greenMsg1 = chalk.green.inverse.bold('Green Hello!');
console.log(greenMsg1);
/*
challenge :Use chalk library in your project

1-install version 2.4.1 of chalk
2- load chalk into app.js
3- Use it to print the string "Success!" to the console in green
4- test your work
//Bonus : Use docs to mess around with othe styles . maek text bold and inversed.


*/
