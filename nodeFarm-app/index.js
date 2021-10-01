const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    console.log(req.url);

    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview')
        res.end('This is the OVERVIEW');
    else if (pathName === '/product')
        res.end('This is the PRODUCT');
    else{
        //add the status code to response(404)

        //the headers and status code allways need to be set before sending response
        //with writeHead we can also send headers , by specifying an object in the second parameter
        
        //an http header is a piece of informations about the response that we are sending back
        res.writeHead(404 ,{
            //there are many different standard headers that we can specify to inform the client 
            //about the response .
            //perform the browser(client) about the content type (standard header).
            'Content-type': 'text/html',
            //own made up headers
            'my-own-header': 'hello-world'
        });
        //the browser now is expecting an html because of content-type header
        //so we can use balise of html
        res.end('<h1>Page not FOUND!</h1>');
    }
  //  res.end('Hello from the server!safa');
});

server.listen(8000,'127.0.0.1',()=> {
    console.log('Listening to requests on port 8000');
});

//implement very simple routing in the server that we create
// the url module will help us to parse the parameters and values innto nicely formatted object
    /*http://127.0.0.1:8000/overview?id=23&abc=321*/
//first step -> be able to analyse the url => use a built-in node module url