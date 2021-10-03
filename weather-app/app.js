const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=93a509590a634d41eec32553a0695764&query=32.235967,-7.946685'
//automatically parse json responses for us 
//json :true means that response body will always be an object , no need to parse it
request({ url : url, json: true}, (error, response) =>{
    console.log(response.body.current);
    const forecast = `It is currently ${response.body.current.temperature} degrees out . There is a ${response.body.current.precip}%  `;
    console.log(forecast);
});

//what type of forecast we want to print ?
/*
    Goal : Print a small forecast to the user

    1- Print : "It is currently 58.55 degrees out. There is a 0% chance of rain."
    2- Test your work

*/