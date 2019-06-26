let sender = require('./MessageSender.js');
let weatherLoader = require('./WeatherLoader.js');
//function entry 
module.exports = async function (context, myTimer) {
    //Default code
    var timeStamp = new Date().toISOString();
    if (myTimer.IsPastDue) {
        context.log('JavaScript is running late!');
    }

    weatherLoader.getJSON().then(
        function(result){
            context.log('testing');
            var list =result.list[0].main;
            let temp = weatherLoader.kelvinToCelsius(list.temp).toFixed(2);
            let lowTemp = weatherLoader.kelvinToCelsius(list.temp_min).toFixed(2);
            let highTemp =  weatherLoader.kelvinToCelsius(list.temp_max).toFixed(2);
            let resultString = 'Current temp is '+temp+' Higher temp is '+highTemp+' lower temp is '+lowTemp+'. Today most likely is '+result.list[0].weather[0].description;
            sender.sendBody(resultString);
        }
    )

    //My code start here
    context.log('[DEBUG LABLE: FUNCTION HEAD]');
    return context.log('[DEBUG LABLE: FUNCTION END]');
};
// weatherLoader.getJSON().then(
//     function(result){
//         var list =result.list[0].main;
//         let temp = weatherLoader.kelvinToCelsius(list.temp).toFixed(2);
//         let lowTemp = weatherLoader.kelvinToCelsius(list.temp_min).toFixed(2);
//         let highTemp =  weatherLoader.kelvinToCelsius(list.temp_max).toFixed(2);
//         console.log(result.list[0].weather[0].description);
//         console.log('Current temp is '+temp+' Higher temp is '+highTemp+' lower temp is '+lowTemp+'. Today most likely is '+result.list[0].weather[0].description);
//     }
// )