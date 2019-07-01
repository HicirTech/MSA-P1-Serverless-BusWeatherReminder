var MessageSender = {
    //date used to send the information
    SMSTarget: '+642102225648',
    SMSSource: '+18123474471',

    //function used to call the the twilio
    //it takes in the the sid , and the Token,
    //this should be inputed by using environment variable.
    sendBody: function (twilioAccountSid, twilioAuthToken, messageBody) {
        twilioClient = require('twilio')(twilioAccountSid, twilioAuthToken);
        twilioClient.messages.create({
            to: this.SMSTarget,
            from: this.SMSSource,
            body: messageBody
        });
    }
}
module.exports = MessageSender;


//test function
function test() {
    var sender = MessageSender;

    sender.sendBody('AC98341b0926c068eae2229935485fae27', 'c0cb68d38cd0540e73d3bcaceb2441c5', 'TEST');
}
// test();