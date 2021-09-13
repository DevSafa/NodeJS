/*
    before we use the filesystem module , we will loaded in 
    this is done by using the require function that node provides.

    the require function is how we load in other things , whether it's a core node module , 
    another file we created , or npm module , we've choosen to install .

    fs is the name module 
    require it will load the fs module , fs module is built right in the node 
    we store the return value of require in fs variable. 
*/
const fs = require('fs');

/* filesystem module (core module , comes with installation of node) must to be required by you in the script you're using it . */

//if the file doesn't exist it will be created 
fs.writeFileSync('notes.txt','This file was created by Node js');
//if the file exist , it's text content will be overwriting
fs.writeFileSync('notes.txt','My name is Safa Barka');


/*

    challenge :Append a message to notes.txt
    1- Use appendFileSync to append to the file 
    2- Run the script
    3 - check your work by opening the file and viewing teh appended text 

*/

fs.appendFileSync("notes.txt","\nhello woooooolrd!!");