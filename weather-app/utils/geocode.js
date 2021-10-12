const request = require('request');


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

//export the module
module.exports = geocode