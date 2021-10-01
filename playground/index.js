
const fs = require('fs')

//Blocking , synchrounous way
const txtIn = fs.readFileSync('../about','utf-8');
console.log(txtIn);
const textOut =  `This is what we know about node JS : \n${txtIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./output.txt',textOut);
console.log('File written!');

console.log("********************************************\n");
//Non-blocking , asynchrounous way
//node js is all built around callbacks in order to implement asynchrounous behaviour
//to read file in asynchrounous way
//it will start to read file in background , as soon as it'is ready , then the callback function 
//will start executing.
fs.readFile('../brew.sh','utf-8' , (err, data) =>{
    console.log(data);
});
//when readFile is run it will start reading file in the background without blocking the rest of the code execution
//when the file is completely read , the callback function will run 
//the callback function has the access to the error and data that has benn read
console.log('Will read file!');