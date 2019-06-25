

//function entry 
module.exports = async function (context, myTimer) {
    //Default code
    var timeStamp = new Date().toISOString();
    if (myTimer.IsPastDue) {
        context.log('JavaScript is running late!');
    }

    //My code start here
    console.log('[DEBUG LABLE: FUNCTION HEAD]');
    // sendMessage('Message testing');
    var sender = require('./MessageSender.js');
    sender.sendMethod('simpler module test');
    return console.log('[DEBUG LABLE: FUNCTION END]');
};

