var req = require('request-promise');

const apiKey =  process.env['weatherAPIkey'];
var weatherLoader = {
    //apiKey: process.env['weatherAPIkey'],
    zipCode: '1010',
    countryCode: 'nz',
    getUrl: function (apiKey) {
        return url = 'https://api.openweathermap.org/data/2.5/forecast?zip=' +
            this.zipCode + ',' + this.countryCode + '&appid=' + apiKey;
    },
    kelvinToCelsius: function (kelvin) {
        return kelvin - 273.15;
    },
    getWeatherResult: function (apiKey) {
        var url = this.getUrl(apiKey);
        return req(url)
            .then(function (response) {
                return JSON.parse(response);
            });
    }
}

module.exports = weatherLoader;