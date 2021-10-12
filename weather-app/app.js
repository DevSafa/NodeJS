const geocode = require('./utils/geocode');
//require the file , the js extension is added by js 
const forecast = require('./utils/forecast');



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

geocode('Boston', (error,data) => {
    console.log('Error : ', error);
    console.log('Data  : ',data);
});



forecast(5,-12,(err,data) => {
    console.log('error-forecast : ',err);
    console.log('data-forecast : ',data);
});

forecast(32.235967,-7.946685,(err,data) => {
    console.log('error-forecast : ',err);
    console.log('data-forecast : ',data);
});


forecast(44.1545,-75.7088,(err,data) => {
    console.log('error-forecast : ',err);
    console.log('data-forecast : ',data);
});
forecast(-75.7088,44.1545,(err,data) => {
    console.log('error-forecast : ',err);
    console.log('data-forecast : ',data);
});
