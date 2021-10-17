const http = require('http');
/* import the url module using require() and save it to a const variable called url. */
const url = require('url');

const URL_TO_PARSE = 'https://www.example.com/p/a/t/h?prop1=value1&prop2=value2';

/* A new URL object can be instantiated using the URL class as follows :*/
const url_object = new URL(URL_TO_PARSE);

/*Once instantiated, different parts of the URL can be accessed and modified*/
console.log(url_object);

console.log("-------------------");

//hostname: Gets and sets the host name portion of the URL
console.log("hostname" ,url_object.hostname);

//pathname: Gets and sets the path portion of the URL.
/*
searchParams: Gets the search parameter object representing the query 
parameters contained within the URL. Returns an instance of 
the URLSearchParams class.  

Using these properties, one can break the URL down into easily usable 
parts for processing the request.
*/
console.log("pathname" ,url_object.pathname);


/*
While the url module can be used to deconstruct a URL into its constituent 
parts, it can also be used to construct a URL
*/

const construct_url = new 
URL('https://myUrl.com');
construct_url.pathname ='/path/name';
construct_url.search = '?query=string';

console.log("construct url : ", construct_url.toString());

console.log('------------');

console.log("searchParams",url_object.searchParams);
const server = http.createServer((req,res) =>{
    res.end('Hello User');
});
server.listen(8080,() =>{
    console.log('Server is Runing!');
});




