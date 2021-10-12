const request = require('request');


const geocode = (address, callback) => {
   
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic2JhcmthIiwiYSI6ImNrdWsweDUyNDMycGQyb21vZmZ0dWE3NTkifQ.mF0kLRehFcQJ1-5eR6_jjQ&limit=1';

    request({url : url , json :true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!',undefined); // undefined will be set by default by js 

        }else if (response.body.features.length === 0)
            callback('Unable to find location. Try another search.',undefined);
        else
        {
            callback(undefined,{
                latitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                location : response.body.features[0].place_name
            })
        }
    })

}

//export the module
module.exports = geocode