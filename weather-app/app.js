const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


//
//Goal :Use both destructuring and property shorthand in weather app

//1- Use destructuring in app.js , forecast.js , and geocode.js
//2-Use property shorthand in forecast.js and geocode.js
//3- test your work and ensure app still works

const address = process.argv[2];

if (!address)
    return console.log('Please Provide an address');

//destructure the second argument passed to callback
//if we called geocode , and an error occured , we will destructure off the undefined , which willl
//going to throw an error , we can only destructure off an object
geocode(address, (error, {latitude,longitude,location}= {} ) => {
    if(error)
        return console.log(error);
    forecast(latitude,longitude,(err,forecastdata) => {
        if(error)
            return console.log(error);
        console.log(location);
        console.log(forecastdata);
    });
});

