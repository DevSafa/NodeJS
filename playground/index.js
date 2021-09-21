/*
    import the build in module needed to write to and read from a file  
*/
const fs = require('fs')

//second parameter the character encoding utf-8
//if we don't specify the character  encoding we get back something called a buffer
//read the data from the file and return it to us
const txtIn = fs.readFileSync('../about','utf-8');

console.log(txtIn);


//write into a new file

//use template string  , es6 , before es6 we use plus operator
// thisi is + .. + ...
//Date in timestamp milliseconds
const textOut =  `This is what we know about node JS : \n${txtIn}.\nCreated on ${Date.now()}`;

fs.writeFileSync('./output.txt',textOut);

console.log('File written!');

