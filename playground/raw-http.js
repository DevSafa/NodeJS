/* 
    const request = require('request') 
    request is just an npm library , that make you do things (make http requests)
    easly ...
    =>request npm module make the whole the process much easier.

    so how we can make request using the modules that node provides (core modules) ?
        -recreate one of our http requests
        -send the request to teh server
        - getting and parsing teh response
        - HTTP and HTTPS => npm module abstract all the things behind the scenes
        -HTTPS make request to a secure server
            - you can use these libraries to create new server
            - make request to an existing server 

*/

//use a core module  / use of low level api
//no need to install just load in it 

//weith stackweather , we use http instead of https , because https is a paid feature
const http = require('http');

const url = `http://api.weatherstack.com/current?access_key=93a509590a634d41eec32553a0695764&query=40,-75&units=f`;

//make a request using request function
//request function has two arguments :
//first one : url which you have access to 
//second one :callback function ; this callback function gets called with the response
const request = http.request(url, (response) => {
    //this callback will be very different from the callback we used to like we have in forecast or geocode file
    //our core node modules typically operates at a lower level while npm modules like request abstract away a lot of complexity
    

    //since we are using core module here , we're gonna set up things that you might not think should be necessary.
    //for example , in this callback we don't have access to the complete response body , instead we can go ahead and grap
    //individual chunks that come through because http data could be streamed in multiple parts.
    //what that means , it means we have to listen for individual chunks to come in , also we have to listen 
    //if all chunks have arrived an the request is done
    //we can start this process by using reponse.on

    //create variable to store chunks
    let data = '';
 
    //response.on is a function and it allows us to register a handler
    //first argument is the event name
    // provide the callback that be called when a new data comes in 
    // access the data via the argument commonly called chunk
    // chunk of response might be the entire thing or not dependent on exactly how the server has been set up

    
    response.on('data',(chunk) => {
        //this callback will be called when data comes in 
        //it could happen one time or multiple times
        //either way we need to take this chunk  and add it somewhere where we can store it 
        //until we have all of them then we can parse it as json

        //the chunk data that comes back is a buffer , so we use toString (convert the buffer to a string)
        data = data + chunk.toString();
        // console.log(chunk);
        // console.log("---------");
        //console.log(chunk);
    });

    //figure out when we are done 
    // waiting for the end event
    // the callback function hasn't have any argument

    //access the entire value response in the data variable
    response.on('end' ,() =>{
        console.log(data);
        // instead of getting the long string , we get the parse object
        const body = JSON.parse(data);
        console.log(body);
    });
});

// request.on('error',(error) => {
//     console.log('An error',error);
// })
//

//set up another listenner
//with the event listenner error
// when an error occured
request.on('error',(error) => {
    console.log('An error',error);
})

request.end();


/*
    ==> very  basic http request with the core node module
    ==> this does provide you with everything you need but in a much lower level that you probably expected
    ==> in real world people doesn't make request with this core modules , instead , they using libraries like 
    request , axios , others...

    ==> the core node modules are supposed to provide those low level implementations . and node comes bundle with npm 
        because you supposed to be using npm modules when your building up your application
*/