
// import the Node native HTTP package and use it to create a server
const http = require('http');

const server = http.createServer((req,res) => {
    // this function  will be executed every time a call is made to that server
    // That function receives the  request  and  response  objects as arguments

    // you use the response's  end  method to send a string response back to the caller
    res.end('This is my server response!');
});


//set the server up to listen on either the port environment variable (potentially set by the 
//platform to which you will deploy your server) or port 3000 for development.
server.listen(process.env.PORT || 3000);



