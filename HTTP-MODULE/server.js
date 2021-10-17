/* Import the http module using require(). Save the module as a const variable called http */
const http = require('http');

/*
-The .createServer() method takes a single argument in the form of a 
    callback function.
-This callback function has two primary arguments; 
    the request (commonly written as req) and 
    the response (commonly written as res).
req object : 
    -contains all of the information about an HTTP request ingested by the server. 
    -It exposes information such as the HTTP method (GET, POST, etc.), 
        the pathname, headers, body, and so on.
res object :
    -contains methods and properties pertaining to the generation of a response by the HTTP server.
    -This object contains methods such as .setHeader() 
        (sets HTTP headers on the response), .statusCode (set the status code of the response), 
        and .end() (dispatches the response to the client who made the request). 

- Using this simple .createServer() method, in conjunction with the callback, provides the ability to
     process HTTP requests dynamically and dispatch responses back to their callers.
*/

// Create a simple server using the .createServer() method and assign it to a const variable called server. 
const server = http.createServer((req,res) => {

    /*
        we use the .end() method to send the string ‘Server is Running!’ 
        to the client, which will display on the web page.
    */
    res.end('Server is Running!');
});

/*
-Once the .createServer() method has instantiated the server, it must begin listening for connections. 
    This final step is accomplished by the .listen() method on the server instance.
-This method takes a port number as the first argument, which tells the server to listen for connections 
    at the given port number
- the server has been set to listen on port 8080
- the .listen() method takes an optional callback function as a second argument, allowing it to carry out
     a task after the server has successfully started.
*/
// Using the server object, make your newly created server listen on port 8080
server.listen(8080, () => {
    //{ address: '::', family: 'IPv6', port: 8080 }
    console.log("address object : ",server.address());

    //es6 features : destructuring the object
    const {address, port} = server.address();
    console.log(`Server is listening on:
    http://${address}:${port}`);
});