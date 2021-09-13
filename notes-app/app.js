/*

    challenge :Define and use a function in a new file

    1- creates a new file called notes.js
    2- create getNotes function that return s "Your notes..."
    3- export getNotes function
    4- From app.js , load in and call the function printing message to console

*/
const getNotes = require('./notes.js');

const msg = getNotes();

console.log(msg);
