const chalk  = require('chalk');
const { string } = require('yargs');
const yargs = require('yargs'); // load in the yargs library
const getNotes = require('./notes.js');


yargs.version('1.1.0');


//create add command suing yargs , it takes an object
yargs.command({
    command: 'add',
    describe: 'add a new note',
    //builder is an object where we can define all the options that we want the given comamdn to suport
    //we need option title and body to add a note , so we will seting up as properties in the builder object 
    builder : {
        title: {
            describe: 'Note title',
            //set to false bydefault
            //you have to provide title for that command work correctly
            demandOption : true,
            //make sure that title property is always a string
            type: 'string',
        }
    },
    handler:  function (argv){
        console.log('Adding a new note!',argv);
        
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



