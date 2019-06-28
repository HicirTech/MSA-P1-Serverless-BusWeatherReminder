var request = require('request-promise');

var ATstopReciver = {
    stopCode: '7140',
    targetBus: '70',
    routeIds: '07006-20190613111133_v80.31',
    //apiKey: process.env['ATApiKey'],
    targetTime: '12:40 p.m.',
    getHeader: function (apiKey) {
        return { 'Ocp-Apim-Subscription-Key': apiKey };
    },
    getUrl: function () {
        return 'https://api.at.govt.nz/v2/gtfs/btf/timetable?route_ids=' + this.routeIds +
            '&stop_code=' + this.stopCode +
            '&route_short_name=' + this.targetBus;
    },
    getTimeTable: function (apiKey) {
        var url = this.getUrl();
        var header = this.getHeader(apiKey);
        return request({ headers: header, url: url, method: 'GET' }).then(function (response) {
            var date = new Date();
            var resultSet = JSON.parse(response);
            return date.getDay() < 6 ?
                resultSet.response[0] : date.getDay() === 6 ?
                    resultSet.response[1] : resultSet.response[2];
        });
    },
    getNextBus(result) {
        var targerBusTime = 'null';
        var schedule = result.schedule;
        for (i = 0; i != schedule.length; i++) {
            if(this.targetTime.substr(this.targetTime.length-4, this.targetTime.length)===schedule[i].substr(schedule[i].length-4, schedule[i].length)){
                if (schedule[i] > this.targetTime) {
                    targerBusTime = schedule[i];
                    break;  
                }
            }
        }
        return targerBusTime;
    }
}
module.exports = ATstopReciver;
ATstopReciver.getTimeTable('897d78125e664385b01574e30347e035').then(
    function (result) { console.log(ATstopReciver.getNextBus(result)); });