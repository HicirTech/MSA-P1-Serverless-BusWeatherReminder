
var request = require('request');
var rp = require('request-promise');

var weatherLoader = {
    apiKey: '291bab08e606853f0c06bd27e98e8be6',
    zipCode: '1010',
    countryCode: 'nz',

    getUrl: function () {
        var url = 'http://api.openweathermap.org/data/2.5/forecast?zip=';
        url += this.zipCode + ',' + this.countryCode;
        url += '&appid=' + this.apiKey;
        return url;
    },
    kelvinToCelsius: function (kelvin) {
        return kelvin - 273.15;
    },
    getJSON: function () {
        var url = this.getUrl();
        console.log(url);
        return rp(url)
            .then(function (response) {
                return JSON.parse(response);
            });
    }
}

module.exports = weatherLoader;