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
