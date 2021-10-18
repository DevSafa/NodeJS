const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

    console.log(req.url);

    const pathName = req.url;
    //routing : for differen pathnames we have different actions
    if(pathName === '/' || pathName === '/overview')
        res.end('This is the OVERVIEW');
    else if (pathName === '/product')
        res.end('This is the PRODUCT');
    else if (pathName === '/api')
    {
        //we want to read the data from the file data.json
        //then parse json into javascript , and then send back that result to the client
        
        //read the file using fileread function
        //the dot in node refers the directory from which we run the node command in the terminal
        //if we start the script from the desktop , the dot will refer to Desktop
            //fs.readFile('./data/data.json')
        //all node js script get access a variable called __dirname
        //this variable always translate to the directory in which the script is currently executed is located
        fs.readFile(`${__dirname}/data/data.json`,'utf-8',(err,data) => {
            //after finishing reading file the callabck is called
            //data is in json => need to parse the data 
            //JSON.parse() => take the json data which is a string and will automatically turened it into javascript object , or array in our case
            const productData = JSON.parse(data);
            console.log(productData);

        });
        res.end('API');
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
