const fs = require('fs');
const http = require('http');

///////////////////////////////
//SERVER

const server = http.createServer((req, res) => {
    console.log(req); // request  object
    res.end('Hello from the server!safa');
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to requests on port 8000');
});

