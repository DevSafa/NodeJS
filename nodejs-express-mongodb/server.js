
const http = require('http');
const app = require('./app');

// console.log(process.env.PORT); undefined
app.set('port',process.env.PORT || 3000);

// Making a request to this server will throw an Express-generated 404 error, 
//as our Express app has no way of responding yet
const server = http.createServer(app);

server.listen(process.env.PORT || 3000);



