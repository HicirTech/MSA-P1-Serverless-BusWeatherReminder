# BusWeatherReminder - Node.js
Function `BusWeatherReminder` is made up by 4 module of codes.

`WeatherLoader.js` - Response for get weather data from OpenWeatherMap API, so real time weather date can be use for message
`MessageSender.js` - Response for send out the message by using twilio API
`ATLoader.js` - Response for get bus data from AT Developer API
`index.js` - Response for cooperating weather and bus data, load text face from json file, and use `MessageSender` to sent out the message.

## How it works
Because it is a timmer function, it will be triggered at every day 10.00 a.m. You can see this by looking into `function.json`
```
 "schedule": "0 0 10 * * *"	
```
So every day 10am at morning, you will get all the brief you need for today.