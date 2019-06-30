let sender = require('./MessageSender.js');
let weatherLoader = require('./WeatherLoader.js');
let atLoader = require('./ATLoader.js');
let textFace = require('./jsonFaceLoader.js');

//function entry 
const weatherApiKey = process.env['weatherAPIkey'];
const twilioAuthToken = process.env['twilioAuthToken'];
const twilioAccountSid = process.env['twilioAccountSid'];
const ATkey = process.env['ATApiKey'];


module.exports = async function (context, myTimer) {
    //Default code
    var timeStamp = new Date().toISOString();
    if (myTimer.IsPastDue) {
        context.log('JavaScript is running late!');
    }


    //debug code, deleted later
    context.log(weatherApiKey);
    context.log(twilioAuthToken);
    context.log(twilioAccountSid);
    context.log(ATkey);



    //My code start here
    weatherLoader.getWeatherResult(weatherApiKey).then(
        function (weatherResult) {
            let resultString = weatherStringMakeUp(weatherResult)
            atLoader.getTimeTable(ATkey).then(
                function (busResult) {
                    resultString += busStringMakeUp(busResult);
                    sender.sendBody(twilioAccountSid, twilioAuthToken, resultString);
                });
        }
    );
};

//helpers

//used the weather info to make up a compleleted String
//which has all welcoming info and weather info
function weatherStringMakeUp(result) {
    var list = result.list[0].main;
    let temp = weatherLoader.kelvinToCelsius(list.temp).toFixed(2);
    let resultString = textFace.getARandomFace();
    resultString+= '  Hey good morning, current temperature is ' + temp + '°C' +
        '. Today\'s Weather is: ' + result.list[0].weather[0].description + '. ';
    return resultString;
}

//used the bus info to make up a compleleted String
//which has ending info and bus info
function busStringMakeUp(result) {
    var targetBus = atLoader.targetBus;
    var targetStop = atLoader.stopCode;
    var targetBusTime = atLoader.getNextBus(result);
    let resultString = 'Your bus ' + targetBus + ' will arrive at stop ' + targetStop + ' at ' + targetBusTime;
    return resultString + ' Have a nice day!';
}