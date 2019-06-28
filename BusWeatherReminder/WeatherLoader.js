var req = require('request-promise');

var weatherLoader = {
    //Date used to get weather info from OpenWeatherMap
    zipCode: '1010',
    countryCode: 'nz',

    //Use API key, zip code and country code to
    //get a compeleted url for POST request to 
    //OpenWeatherMap weather sources
    getUrl: function (apiKey) {
        return url = 'https://api.openweathermap.org/data/2.5/forecast?zip=' +
            this.zipCode + ',' + this.countryCode + '&appid=' + apiKey;
    },

    //Convert Kelvin value to Celsius value
    kelvinToCelsius: function (kelvin) {
        return kelvin - 273.15;
    },

    //get JSON result from OpenWeather
    getWeatherResult: function (apiKey) {
        var url = this.getUrl(apiKey);
        return req(url)
            .then(function (promise) {
                return JSON.parse(promise);
            });
    }
}
module.exports = weatherLoader;


//test function 
function test() {
    var weatherLoader = weatherLoader;
    weatherLoader.getWeatherResult('{APIKEY}').then(
        function(promise){
            console.info(promise);
        }
    );
}
test();