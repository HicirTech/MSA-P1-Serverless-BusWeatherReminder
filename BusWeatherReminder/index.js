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
            console.log('testing');
            sender.sendBody(result.list[0].weather[0]+'Fucntion acting like object and exports to index.js');
        }
    )
    //My code start here
    context.log('[DEBUG LABLE: FUNCTION HEAD]');

    

    return context.log('[DEBUG LABLE: FUNCTION END]');
};
