var MessageSender = {
    twilioAccountSid: 'AC98341b0926c068eae2229935485fae27',
    twilioAuthToken: 'cee7c369dce679ba059880b8b8ccbdfb',
    SMSTarget: '+6402102225648',
    SMSSource: '+18123474471',
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