# About the assignment
### code available on GitHub ✔ 
Here is the code: https://github.com/HicirTech/MSA-P1-Serverless-BusWeatherReminder/tree/master/BusWeatherReminder
### screenshots of the project output ✔


<img src="https://github.com/HicirTech/MSA-P1-Serverless-BusWeatherReminder/blob/master/img/result1.jpg" width="256"><img src="https://github.com/HicirTech/MSA-P1-Serverless-BusWeatherReminder/blob/master/img/result2.jpg" width="256">

### screenshots of the learning videos [not done yet]

### screenshots of submition [not done yet]

# About the project - Daily bus and weather SMS reminder
Every daily seny you a message to your honeright before you wake up. It contains the weather as well as your route bus time. This project is used for Phase 1 Assignment MSA 2019. 

### Prerequisites
Considering the safty of credential keys, the code of this project are changed to use environment variables. All there environment variable are located at the top of `index.js` as `const` variable. You will need to add you keys to you function configuration. Details is under deployment section.
```
const weatherApiKey = process.env['weatherAPIkey'];
const twilioAuthToken = process.env['twilioAuthToken'];
const twilioAccountSid = process.env['twilioAccountSid'];
const ATkey = process.env['ATApiKey'];
```

In order to make this project suitable for you, you need to change some key data in the codes. Replace info in the {}

ATLoader.js
```
stopCode: '{Your bus stop}',
targetBus: '{Your bus}',
routeIds: '{The route id of your bus}',
targetTime: '{e.g. 6:30 a.m.}'
```

WeatherLoader.js
```
zipCode: '{Your post code}',
countryCode: '{you country code in lower case e.g. nz}'
```

MessageSender.js
```
SMSTarget: '{Your phone number}',
SMSSource: '{Your source phone number}',
```

## Deployment
This project should be deploy serverlessly on using Function app, after you deploy the project, please use console to run `npm install` to install the nodejs dependence.
You will also need to add your key to the configuration of the function app. To do that, you need to go into your `portal`, select `Platform features` tag at the top,
<img src="https://github.com/HicirTech/MSA-P1-Serverless-BusWeatherReminder/blob/master/img/pfTag.png" width="256"> 
then select `Configuration`. 
<img src="https://github.com/HicirTech/MSA-P1-Serverless-BusWeatherReminder/blob/master/img/configuration.png" width="256"> 
Down in `Application settings`, 
<img src="https://github.com/HicirTech/MSA-P1-Serverless-BusWeatherReminder/blob/master/img/new.png" width="256"> 
add variable `ATApiKey`,`twilioAccountSid`,`twilioAuthToken`,`weatherAPIkey`.
<img src="https://github.com/HicirTech/MSA-P1-Serverless-BusWeatherReminder/blob/master/img/vari.png" width="256"> 
## Built With
* [Azure](https://azure.microsoft.com/) - The cloud computing platform used
* [Azure Function](https://azure.microsoft.com/en-in/services/functions/) - The serverless compute platform used
* [Node.js](https://nodejs.org/) -  JavaScript runtime stack used
* [Twillo](https://twilio.com/) - Cloud communications platform used for messsaging
* [OpenWeatherMap](https://openweathermap.org/) - Weather data sourece for this project
* [Auckland Transport API](https://dev-portal.at.govt.nz/) - Bus route data sourece for this project
* [textfac.es](https://textfac.es/) -  Text face sourece for this project

## Authors
* **Zeting Luo** - *Initial work* - [HicirTech](https://github.com/HicirTech)