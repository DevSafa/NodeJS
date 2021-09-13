/*
    all the file that yoou can refer to as modules have their own scope
    app.js has it's own scope with it's own variables
    utils.js has it's own scope 

    app.js cannot access the variables from utils.js even if it'is loaded with require
*/
    //require('./utils.js');


//the return value of require will be the variable that i exports 

const firstName = require('./utils.js');

console.log(firstName);

