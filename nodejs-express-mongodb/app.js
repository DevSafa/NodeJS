
const express = require('express');

const app = express();

/*
callback function :
(req,res) => {
    res.json({message : 'Your request was succesful! '});
}
-this is a piece of middleware
- each instance of middeleware also receive next as a third arg
- wich allow the middelware to pass execution on to the next piece of middelware in the server
- (req,res,next) => {
    res.json({message : 'Your request was succesful! '});
    next()
}
*/

app.use((req,res,next) => {
    //request is coming , is handled by the first middelware
    //which log to the console
    console.log('Request received!');

    //calle the next to hand execution into the following piece of middelware
    next();
});


app.use((req,res, next) => {
    // add something to the response , an http status code .
    res.status(201);
    //next() used to hand execution forwardç
    next();
});

app.use((req,res,next) => {
    // send back the response as json
    console.log(res.statusCode);
    res.json({message : 'Your request was succesful! '});
    next();
});

//after use json to send the response , you can't use another piece of middleware to modify the response
//because it already been sent and it will throw an error
// we can have another piece of middelware which will make another log to the console 
app.use((req,res,next) => {
    console.log('Response  sent successfully!');
});


module.exports = app;

/*
    This Express app contains four pieces of middleware:
        -the first logs "Request received" to the console, and hands on execution.
        -the second adds a 201 status code to the response, and hands on execution
        -the third sends the JSON response, and hands on execution
        -the final piece of middleware logs "Response sent successfully" to the console
*/