var MessageSender = {
    //date used to send the information
    SMSTarget: '+642102225648',
    SMSSource: '+61437650299',

    //function used to call the the twilio
    //it takes in the the sid , and the Token,
    //this should be inputed by using environment variable.
    sendBody: function (twilioAccountSid,twilioAuthToken,messageBody) {
        twilioClient = require('twilio')(twilioAccountSid, twilioAuthToken);
        twilioClient.messages.create({
            to: this.SMSTarget,
            from: this.SMSSource,
            body: messageBody
        })
    }
}
module.exports = MessageSender;


//test function
function test(){
    var sender = MessageSender;
    sender.sendBody('{SID}','{TOKEN}','TEST');
}
//test();