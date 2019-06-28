var request = require('request-promise');

var ATstopReciver = {
    stopCode: '7140',
    targetBus: '70',
    routeIds: '07006-20190613111133_v80.31',
    apiKey: process.env['ATApiKey'],
    targetTime: '1:00 p.m.',
    getHeader: function () {
        return { 'Ocp-Apim-Subscription-Key': this.apiKey };
    },
    getUrl: function () {
        return 'https://api.at.govt.nz/v2/gtfs/btf/timetable?route_ids=' + this.routeIds +
            '&stop_code=' + this.stopCode +
            '&route_short_name=' + this.targetBus;
    },
    getTimeTable: function () {
        var url = this.getUrl();
        var header = this.getHeader();
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
            if (schedule[i] > this.targetTime) {
                targerBusTime = schedule[i];
                break;
            }
        }
        return targerBusTime;
    }
}
module.exports = ATstopReciver;
ATstopReciver.getTimeTable().then(
    function (result) { console.log(ATstopReciver.getNextBus(result)); });