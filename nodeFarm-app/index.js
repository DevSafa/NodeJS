const fs = require('fs');
const http = require('http');
const url = require('url');

//we will use the synchrounous version : it blocks the code execution => that is true.
//but in this case , it's not a problem at all , that's because the top level code only gets executed once in the begening (once we start the program)
// not like the callback function inside createServer that will be executed each time we create a request
    // fs.readFile(`${__dirname}/data/data.json`,'utf-8',(err,data) => {
    //     const productData = JSON.parse(data);
    //     res.writeHead(200 ,{'content-type' : 'application/json'});
    //     res.end(data);
        
    // });


const data = fs.readFileSync(`${__dirname}/data/data.json`,'utf-8');
const dataObj = JSON.parse(data); // parse it into an object 

const server = http.createServer((req, res) => {

    console.log(req.url);

    const pathName = req.url;
    if(pathName === '/' || pathName === '/overview')
        res.end('This is the OVERVIEW');
    else if (pathName === '/product')
        res.end('This is the PRODUCT');
    else if (pathName === '/api')
    {
       res.writeHead(200, {'content-type' : 'application/json'});
       res.end(data);
    }
    else{
        res.writeHead(404 ,{
           'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });

        res.end('<h1>Page not FOUND!</h1>');
    }
});


server.listen(8000,'127.0.0.1',()=> {
    console.log("dirname : " , __dirname);
    console.log('Listening to requests on port 8000');
});
