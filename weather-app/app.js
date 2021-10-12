const request = require('request');

// const url = 'http://api.weatherstack.com/current?access_key=93a509590a634d41eec32553a0695764&query=32.235967,-7.946685&units=f'

//wrong url :
    //http://api.weatherstack.com/current?access_key=93a509590a634d41eec32553a0695764&query=&units=f


//set up error handling:
    // no network available => error contains value and response does not
    // bad set of coordinates 

// request({ url : url, json: true}, (error, response) => {
    
//     if (error) {
//         //low level error 
//         console.log('Unable to connect to weather service!');
//     } else if (response.body.error){ // check if the error property exist , if does, so something go wrong
//         console.log('Unable to find location');
//     }
//     else {
//         const forecast = response.body.current.weather_descriptions[0] + `. It is currently ${response.body.current.temperature} degrees out . it feels like ${response.body.current.feelslike} degrees out .`;
//         console.log(forecast);
//     }

// });

/*
    Goal :HANDLE ERRORS for geocoding request

    //1-setup an error handler for low-leve; errors
    //2- test by disabling network request and runiing the app
    //3-set up error handling for no matching results
    //4- test by altering the search term and runing app
*/
// const access_token = 'pk.eyJ1Ijoic2JhcmthIiwiYSI6ImNrdWsweDUyNDMycGQyb21vZmZ0dWE3NTkifQ.mF0kLRehFcQJ1-5eR6_jjQ';

// const endpoint = 'mapbox.places';

// const search_text = 'benguerir';


// const host_geocoding = `https://api.mapbox.com/geocoding/v5`;

// //options of geocoding response
// const limit = 1;

// const url_geocoding = `${host_geocoding}/${endpoint}/${search_text}.json?access_token=${access_token}&limit=${limit}`;
// //error :
// //nameconst url_geocoding = `${host_geocoding}/${endpoint}/12ss.json?access_token=${access_token}&limit=${limit}`;

// console.log(`url : ${url_geocoding}`);

// let latitude , longitude , place_name;

// request({url :url_geocoding , json : true} ,(err,response) =>{
//     if(err)
//         console.log('Unable to connect to location services!');
//     else if (response.body.features.length === 0) // get empty array in case of errors
//     {
//        console.log('Unable to find location, try another search');
//     }else
//     {
//         latitude = response.body.features[0].center[1];
//         longitude = response.body.features[0].center[0];
//         place_name = response.body.features[0].place_name;
//         console.log(`latitude : ${latitude}`);
//         console.log(`longtitude : ${longitude}`);
//         console.log(`place_name : ${place_name}`);
//     }
// });

//define a function and call it 
//geocode will communicate with mapbox argument
const geocode = (address, callback) => {
   
    //callback called once we have longitude and latitude
    //encodeURIComponent is used for someone search for location that contains special caracteres that actually means someting in url structure  (? becomes %3F)
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic2JhcmthIiwiYSI6ImNrdWsweDUyNDMycGQyb21vZmZ0dWE3NTkifQ.mF0kLRehFcQJ1-5eR6_jjQ&limit=1';

    //first argument of request is options object
    //second argument is the function to run when the request is complete
    request({url : url , json :true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!',undefined); // undefined will be set by default by js 

        }else if (response.body.features.length === 0)
            callback('Unable to find location. Try another search.',undefined);
        else
        {
            callback(undefined,{
                latitude : response.body.features[0].center[0],
                longitude : response.body.features[0].center[1],
                location : response.body.features[0].place_name
            })
        }
    })

}

geocode('12at', (error,data) => {
    console.log('Error : ', error);
    console.log('Data  : ',data);
});

geocode('benguerir', (error,data) => {
    console.log('Error : ', error);
    console.log('Data  : ',data);
});

geocode('Philadelphia New York', (error,data) => {
    console.log('Error : ', error);
    console.log('Data  : ',data);
});

geocode('Philadelphia', (error,data) => {
    console.log('Error : ', error);
    console.log('Data  : ',data);
});