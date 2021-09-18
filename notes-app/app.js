const chalk  = require('chalk');
const getNotes = require('./notes.js');

const command = process.argv[2];

//parsing command line argument is not unique to our app
//it will best look for an npm package that will take care of that for us
console.log(process.argv);
if (command === 'add'){
    console.log('Adding note!');
} else if (command === 'remove'){
    console.log('Removing note!');
}



