    //use comment to test connection of Github and azure
    const accountSid = 'AC98341b0926c068eae2229935485fae27';
    const authToken = 'cee7c369dce679ba059880b8b8ccbdfb';
    const client = require('twilio')(accountSid, authToken);
module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();    
    if (myTimer.IsPastDue)
    {
        context.log('JavaScript is running late!');
    }
    //My code start here
    context.log('Bin');
    var date = new Date();
    var current_hour = date.getHours();
    var current_min = date.getHours();
    client.messages.create({
        to: '+642102225648',
        from: '+18123474471',
        body:current_hour+'Just a 5 minute reminder to keep your posture up'
    })
    
    context.log('Fin');
    return;
};