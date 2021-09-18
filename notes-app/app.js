const chalk  = require('chalk');
const yargs = require('yargs'); // load in the yargs library
const getNotes = require('./notes.js');

// console.log(process.argv)

//Customize yargs version ; by accessing yargs and calling the version method
yargs.version('1.1.0');


//create add command suing yargs , it takes an object
yargs.command({
    command: 'add',
    describe: 'add a new note',
    //handler is the code that runs when someone uses add command
    handler:  function (){
        console.log('Adding a new note!')
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler : function(){
        console.log('Removing the note');
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note');
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler: function(){
        console.log('Listing out  all notes');
    }
})
//setting up yargs to work with commands we need it to work with
//add , remove, read , list


console.log(yargs.argv)



