var MessageSender = {
    SMSTarget: '+6402102225648',
    SMSSource: '+18123474471',
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