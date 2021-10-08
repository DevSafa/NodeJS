const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=93a509590a634d41eec32553a0695764&query=32.235967,-7.946685&units=f'
//automatically parse json responses for us 
//json :true means that response body will always be an object , no need to parse it
// request module automaticaaly parse body for us
// url and json are objects
request({ url : url, json: true}, (error, response) =>{
    console.log(response.body.current);
    const forecast = response.body.current.weather_descriptions[0] + `. It is currently ${response.body.current.temperature} degrees out . it feels like ${response.body.current.feelslike} degrees out .`;
    console.log(forecast);
});

//what type of forecast we want to print ?
/*
    Goal : Print a small forecast to the user

    1- Print : "It is currently 58.55 degrees out. It feels like 5 degrees out"
    2- Test your work

*/