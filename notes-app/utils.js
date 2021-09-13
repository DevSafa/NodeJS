
console.log("utils.js");
// so how we can access the varibale of utils.js  from other files 
//-> we need to explicitly exports all the stuff this file should share with the outside world

// to do that we need to take advantage of another aspect of modules ecosystem 


const name = 'Salma';

//modules.exports is where we define all the things that this file should share with outside

//export the variable , the other files can take advantage of it .
module.exports =  name;

