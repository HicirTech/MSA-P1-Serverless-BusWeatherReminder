var req = require('request-promise');

var weatherLoader = {
    apiKey: '291bab08e606853f0c06bd27e98e8be6',
    zipCode: '1010',
    countryCode: 'nz',

    getUrl: function () {
        return url = 'http://api.openweathermap.org/data/2.5/forecast?zip=' +
            this.zipCode + ',' + this.countryCode + '&appid=' + this.apiKey;
    },
    kelvinToCelsius: function (kelvin) {
        return kelvin - 273.15;
    },
    getJSON: function () {
        var url = this.getUrl();
        return req(url)
            .then(function (response) {
                return JSON.parse(response);
            });
    }
}

module.exports = weatherLoader;