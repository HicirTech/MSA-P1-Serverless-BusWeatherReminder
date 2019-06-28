var MessageSender = {
    twilioAccountSid: process.env['twilioAccountSid'],
    twilioAuthToken: process.env['twilioAuthToken'],
    SMSTarget: '+6402102225648',
    SMSSource: '+61437650299',
    sendBody: function (messageBody) {
        twilioClient = require('twilio')(this.twilioAccountSid, this.twilioAuthToken);
        twilioClient.messages.create({
            to: this.SMSTarget,
            from: this.SMSSource,
            body: messageBody
        })
    }
}
module.exports = MessageSender;