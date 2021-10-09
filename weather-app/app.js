const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=93a509590a634d41eec32553a0695764&query=32.235967,-7.946685&units=f'

// it's an asynchrounous operation
request({ url : url, json: true}, (error, response) =>{
   // console.log(response.body.current);
    const forecast = response.body.current.weather_descriptions[0] + `. It is currently ${response.body.current.temperature} degrees out . it feels like ${response.body.current.feelslike} degrees out .`;
  //  console.log(forecast);
});

//Geocoding
//Address ->Lat/Long

/*
    Goal :Print the Lat/Long for Los Angelss

    1-Fire off a new request to the URL explored in browser
    2-Have the request module parse it as JSON
    3-Print both the latitude and longtitude to the terminal
    4-test your work.
*/

const access_token = 'pk.eyJ1Ijoic2JhcmthIiwiYSI6ImNrdWsweDUyNDMycGQyb21vZmZ0dWE3NTkifQ.mF0kLRehFcQJ1-5eR6_jjQ';

const endpoint = 'mapbox.places';

const search_text = 'Los Angeles';


const host_geocoding = `https://api.mapbox.com/geocoding/v5`;

//options of geocoding response
const limit = 1;

const url_geocoding = `${host_geocoding}/${endpoint}/${search_text}.json?access_token=${access_token}&limit=${limit}`;

console.log(`url : ${url_geocoding}`);

let latitude , longtitude;
request({url :url_geocoding , json : true} ,(err,response) =>{
    latitude = response.body.features[0].center[0];
    longtitude = response.body.features[0].center[1];
    
    console.log(`latitude : ${latitude}`);
    console.log(`longtitude : ${longtitude}`);
});
