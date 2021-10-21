const fs = require('fs');
const http = require('http');
const url = require('url');


const replaceTemplate =(template, product) => {
    let output = template.replace(/{%PRODUCTNAME%}/g , product.productName);
    output = output.replace(/{%IMAGE%}/g , product.image);
    output = output.replace(/{%PRICE%}/g , product.price);
    output = output.replace(/{%NUTRIENTS%}/g , product.nutrients);
    output = output.replace(/{%QUANTITY%}/g , product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g , product.description);
    output = output.replace(/{%ID%}/g , product.id);
    if(!product.organic)
        output = output.replace(/{%NOT_ORGANIC%}/g , 'not-organic');
        //output the final html
    return output;
}

const data = fs.readFileSync(`${__dirname}/data/data.json`,'utf-8');
const dataObj = JSON.parse(data);

//read the all templates , load them , we use readFileSync because we are in top level of the application
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');


const server = http.createServer((req, res) => {
    const pathName = req.url;

    //Overview page
    if(pathName === '/' || pathName === '/overview')
    {
        //load the template overview
        //each time there is  anew request for this route / or .overview
        // the first thing we do is to read the template overview , but we can do that outside the callback 
        res.writeHead(200, {'content-type' : 'text/html'});

        //.map return an array
        // element is what's hold the data.
        //get an array of 5 final htmls , each for one of the five cards (products)
        //loop over the dataObj array here which holds all the product  and in each iteration we will replace the placeholders
        //in the template card with current product wich is elemnt
        const cardsHtml = dataObj.map(element => replaceTemplate(tempCard, element)).join('');
        console.log(cardsHtml);
        
        //we don't want this temperOverview array that contains html , but we want one big string containing that html

        res.end(tempOverview);
    }
    //Product page
    else if (pathName === '/product')
        res.end('This is the PRODUCT');

    //API
    else if (pathName === '/api')
    {
       res.writeHead(200, {'content-type' : 'application/json'});
       res.end(data);
    }

    //Not found
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
