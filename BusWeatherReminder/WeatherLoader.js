var req = require('request-promise');

var weatherLoader = {
    apiKey: process.env['weatherAPIkey'],
    zipCode: '1010',
    countryCode: 'nz',
    getUrl: function () {
        return url = 'https://api.openweathermap.org/data/2.5/forecast?zip=' +
            this.zipCode + ',' + this.countryCode + '&appid=' + this.apiKey;
    },
    kelvinToCelsius: function (kelvin) {
        return kelvin - 273.15;
    },
    getWeatherResult: function () {
        var url = this.getUrl();
        return req(url)
            .then(function (response) {
                return JSON.parse(response);
            });
    }
}

module.exports = weatherLoader;