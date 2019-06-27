// const https = require('https');

// let url =  'https://api.at.govt.nz/v2/notifications/stop/7147';
// let key = '897d78125e664385b01574e30347e035';
// https.get(url,res=>{
//     console.log(res.statusCode);
// });
var request = require('request');
var headers = {
    'Ocp-Apim-Subscription-Key': '897d78125e664385b01574e30347e035'
};
let url =  'https://api.at.govt.nz/v2/gtfs/btf/timetable?route_ids=02707-20190613111133_v80.31&stop_code=7147&route_short_name=27H';
var outer;
request.get({headers: headers, url: url, method: 'GET'}, function (e, r, body) {

    
    outer = body;
});

function function2() {
    // all the stuff you want to happen after that pause
    let json = JSON.parse(outer);
    console.log(json.response);
}
setTimeout(function2, 3000);


