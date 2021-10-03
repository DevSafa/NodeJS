//explore the weather api
//make our first request for real time weather data
//make http request to a weather api in our node app

//to make http request : use core node modules (very low level) , use npm modules that wrapper arround the core module

// npm module to make http request
const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=93a509590a634d41eec32553a0695764&query=32.235967,-7.946685'

//make request to get the data as variable in my node app 
//use request function

//first : option object => what we like to do provide url 
//second : function to run when we have response

request({ url : url}, (error, response) =>{
   // console.log(response); // let's focus on the body property that represent the json string
   // console.log(response.body);
   //parse a JSON string
    const data = JSON.parse(response.body);
    console.log(data);
    console.log("---------\n");
    console.log(data.current);
});