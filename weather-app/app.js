const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


geocode('benguerir', (error,data) => {
    if(error)
        return console.log(error);
    forecast(data.latitude,data.longitude,(err,forecastdata) => {
        if(error)
            return console.log(error);
        console.log(data.location);
        console.log(forecastdata);
    });
});

