//credentials
const twilioAccountSid = 'AC98341b0926c068eae2229935485fae27';
const twilioAuthToken = 'cee7c369dce679ba059880b8b8ccbdfb';
const twilioClient = require('twilio')(twilioAccountSid, twilioAuthToken);
const SMSTarget = '+6402102225648';
const SMSSource = '+18123474471';

//function entry 
module.exports = async function (context, myTimer) {
    //Default code
    var timeStamp = new Date().toISOString();
    if (myTimer.IsPastDue) {
        context.log('JavaScript is running late!');
    }

    //My code start here
    context.log('[DEBUG LABLE: FUNCTION HEAD]');
    sendMessage('Message testing');
    return context.log('[DEBUG LABLE: FUNCTION END]');
};

//help function
function sendMessage(messageBody) {
    twilioClient.messages.create({
        to: SMSTarget,
        from: SMSSource,
        body:messageBody
    })
}