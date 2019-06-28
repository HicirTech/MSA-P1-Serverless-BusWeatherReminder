var MessageSender = {
    SMSTarget: '+6402102225648',
    SMSSource: '+61437650299',
    sendBody: function (messageBody) {
        var twilioAccountSid = process.env['twilioAccountSid'];
        var twilioAuthToken = process.env['twilioAuthToken'];
        twilioClient = require('twilio')(twilioAccountSid, twilioAuthToken);
        twilioClient.messages.create({
            to: this.SMSTarget,
            from: this.SMSSource,
            body: messageBody
        })
    }
}
module.exports = MessageSender;