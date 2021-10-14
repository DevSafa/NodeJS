const request = require('request');

const forecast = (latitude,longitude,callback) => {
  const url = `http://api.weatherstack.com/current?access_key=93a509590a634d41eec32553a0695764&query=${latitude},${longitude}`//&units=f`
  request({url , json :true},(err,{body} ={}) => {
      if(err)
          callback('Unable to connect to weather service!', undefined);
      else if (body.error) //check if the coordinates are bad
          callback('Unable to find location!', undefined);
      else
      {
         // const forecast = response.body.current.weather_descriptions[0] + `. It is currently ${response.body.current.temperature} degrees out . it feels like ${response.body.current.feelslike} degrees out .`
          callback(undefined, body.current.weather_descriptions[0] + `. It is currently ${body.current.temperature} degrees out . it feels like ${body.current.feelslike} degrees out .`)
      }
  });
}



//export the forecast function
module.exports = forecast;