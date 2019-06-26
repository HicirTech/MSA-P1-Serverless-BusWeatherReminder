let sender = require('./MessageSender.js');
let weatherLoader = require('./WeatherLoader.js');
//function entry 
module.exports = async function (context, myTimer) {
    //Default code
    var timeStamp = new Date().toISOString();
    if (myTimer.IsPastDue) {
        context.log('JavaScript is running late!');
    }

    //My code start here
    context.log('[DEBUG LABLE: FUNCTION HEAD]');

    
    sender.sendBody(weatherLoader.getUrl()+'Fucntion acting like object and exports to index.js');

    return context.log('[DEBUG LABLE: FUNCTION END]');
};
