var request = require('request')
var apiKey = '291bab08e606853f0c06bd27e98e8be6';

var url = 'https://samples.openweathermap.org/data/2.5/weather?q=Auckland,uk&appid=b6907d289e10d714a6e88b30761fae22';

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    }
})