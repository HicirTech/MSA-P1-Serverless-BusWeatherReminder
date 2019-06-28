var request = require('request-promise');

var ATstopReciver = {
    //date for request JSON from API 
    stopCode: '7140',
    targetBus: '70',
    routeIds: '07006-20190613111133_v80.31',
    targetTime: '12:40 p.m.',

    //combining header and apikey for header
    getHeader: function (apiKey) {
        return { 'Ocp-Apim-Subscription-Key': apiKey };
    },
    
    //combine data to make up url
    getUrl: function () {
        return 'https://api.at.govt.nz/v2/gtfs/btf/timetable?route_ids=' + this.routeIds +
            '&stop_code=' + this.stopCode +
            '&route_short_name=' + this.targetBus;
    },

    //Use request to get JSON from AT API, return as a promise,
    //promise will be parse to JSON, based on the date of requested
    //a corresponding part of JSON will be return which contains the
    //Target time table of the targeted bus. 
    getTimeTable: function (apiKey) {
        var url = this.getUrl();
        var header = this.getHeader(apiKey);
        return request({ headers: header, url: url, method: 'GET' }).then(function (promise) {
            var date = new Date();
            var resultSet = JSON.parse(promise);
            return date.getDay() < 6 ?
                resultSet.response[0] : date.getDay() === 6 ?
                    resultSet.response[1] : resultSet.response[2];
        });
    },

    //Use the result set JSON from the AT sources,
    //compare target time and the time in result set,
    //once founded, break the loop and return the time
    getNextBus(result) {
        var targerBusTime = 'null';
        var schedule = result.schedule;
        for (i = 0; i != schedule.length; i++) {
            if (this.targetTime.substr(this.targetTime.length - 4, this.targetTime.length) === schedule[i].substr(schedule[i].length - 4, schedule[i].length)) {
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


//test function, used for test the code
function test(){
    ATstopReciver.getTimeTable('{KEY}').then(
        function (result) {
            console.log(ATstopReciver.getNextBus(result));
        });
}

//test();