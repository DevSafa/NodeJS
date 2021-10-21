const fs = require('fs');
const http = require('http');
const url = require('url');

//slugify will be a function which we can use to basically create slugs
// a slug is the last part of the url that contains unique string
//instead of having 127.0.0.1:8000/product?id=0 => we could have 127.0.0.1:8000/product/fresh-avocados
//the slug is fresh-avocados
// the idea is using a unique string instead of just a number
const slugify = require('slugify'); 

const replaceTemplate = require('./modules/replaceTemplate');

const data = fs.readFileSync(`${__dirname}/data/data.json`,'utf-8');
const dataObj = JSON.parse(data);


const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');

// creates an array of all slugs 
//slugigy is a dependency of our code
const slugs = dataObj.map(element => slugify(element.productName ,{ lower :true}));
console.log(slugs);

console.log(slugify('Fresh Avocados', {lower:true }));
const server = http.createServer((req, res) => {
  
    const {query, pathname} = url.parse(req.url,true);
    //Overview page       
    if(pathname === '/' || pathname === '/overview')
    {
        res.writeHead(200, {'content-type' : 'text/html'});
        const cardsHtml = dataObj.map(element => replaceTemplate(tempCard, element)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}',cardsHtml); 
        res.end(output);
    }
    //Product page
    else if (pathname === '/product')
    {
       res.writeHead(200, {'content-type' : 'text/html'});

       const product = dataObj[query.id];
       console.log(product);
       const output = replaceTemplate(tempProduct,product)
       res.end(output);
    }
    //API
    else if (pathname === '/api')
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
