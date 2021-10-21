const http = require('http');
const url = require('url');
const fs = require('fs');

const ft_replace =(t_overview,element) => {
    let output;
    output = t_overview.replace(/%IMAGE%/g,element.image);
    output += output.replace('%PRODUCTNAME%',element.productName);
    output += output.replace('%QUANTITY%',element.quantity);
    output += output.replace('%PRICE%',element.price);
    return output;

}
const t_overview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const t_card = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const data = fs.readFileSync(`${__dirname}/data/data.json`,'utf-8')

console.log(typeof(t_overview));
console.log(t_overview); // it's a string , use typeof
console.log("---------------\n");
console.log(typeof(t_card)); 
console.log(t_card);        //it's a string , use typeof
console.log("---------------\n");
console.log(typeof(data));
console.log(data);          //it's a string , use typeof

console.log("---------------\n");
const data_obj = JSON.parse(data);
console.log(typeof(data_obj));
console.log(data_obj); 

const server = http.createServer((req,res) => {
    res.writeHead(200,{'content-type' : 'text/html'});
    const cardHtml = data_obj.map(element => ft_replace(t_card,element));
    res.end(cardHtml.join(''));
});

server.listen(5000, '127.0.0.1',() =>{
    console.log('start listening to the server in port 5000')
});