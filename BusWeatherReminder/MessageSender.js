var MessageSender = {
    SMSTarget: '+642102225648',
    SMSSource: '+61437650299',
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