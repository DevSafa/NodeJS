const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


//Goal : Accept location via command line argument

//1 - Access the command line argument without yargs
//2 - Use the string value as the input of geocode
//3 - only geocode if a location was provided
//4 - test your work with a couple locations

//first args : path to the node executable
//second : the path to the string we wrote

const address = process.argv[2];

if (!address)
    return console.log('Please Provide an address');

geocode(address, (error,data) => {
    if(error)
        return console.log(error);
    forecast(data.latitude,data.longitude,(err,forecastdata) => {
        if(error)
            return console.log(error);
        console.log(data.location);
       // console.log('latitude  : ',data.latitude);
       // console.log('longitude : ',data.longitude);
        console.log(forecastdata);
    });
});

