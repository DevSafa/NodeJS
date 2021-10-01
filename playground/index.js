const fs = require('fs');
/* 
    include a module  => requiring the built-in http module
    this module give us networking capabilities , such as building an http server
*/
const http = require('http');
///////////////////////////////
//SERVER
//build our server => create the server , start the server for listen incoming request
//create Server will accept a callback function , that will be called each time a new request hits our server
// the callback function has acces to the very important and fundamental variables , Request variable ,Response variable , req , res
const server = http.createServer((req, res) => {
    //send back a response to teh client
    //res is response object
    //callback function will have access to the request object , that hold all the stuffs like request url,...
    //response object gives us a lot of tools basically for dealing with response ,...
    //.end() method => simpliest way for sending avery simple response
   // console.log(req); // request  object
    res.end('Hello from the server!safa');
});
//listen to incomming request from the client
//use the server that we create 
//port : 8000 is  a sub address on a certain host
//host : local host 127.0.0.1 the standard ip address=> the current address
//optional callback function wil run as soon as the server start listening
server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to requests on port 8000');
});
//run the node application : the app doesn;t stop because of the event loop
//open the ip address in prowser 127.0.0.1:8000
// by hitting the url 127.0.0.1:8000 actually i make a request
