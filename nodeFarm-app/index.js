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


const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');


const server = http.createServer((req, res) => {
    const pathName = req.url;

    //Overview page
    if(pathName === '/' || pathName === '/overview')
    {
        res.writeHead(200, {'content-type' : 'text/html'});
        const cardsHtml = dataObj.map(element => replaceTemplate(tempCard, element)).join('');
        console.log(cardsHtml);
        const output = tempOverview.replace('{%PRODUCT_CARDS%}',cardsHtml); 
        res.end(output);
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
