
const twilioAccountSid = 'AC98341b0926c068eae2229935485fae27';
const twilioAuthToken = 'cee7c369dce679ba059880b8b8ccbdfb';
const twilioClient = require('twilio')(twilioAccountSid, twilioAuthToken);
const SMSTarget = '+6402102225648';
const SMSSource = '+18123474471';

var sendMessage = {};

sendMessage.Send = sendMessage(messageBody);

function sendMessage(messageBody) {
    console.log('debug');
    twilioClient.messages.create({
        to: SMSTarget,
        from: SMSSource,
        body: messageBody
    })
}

exports.data = sendMessage;
