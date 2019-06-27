# Daily bus and weather SMS reminder
Every daily seny you a message to your honeright before you wake up. It contains the weather as well as your route bus time. This project is used for Phase 1 Assignment MSA 2019. 

### Prerequisites
In order to make this project suitable for you, you need to change some key data in the codes. Replace info in the {}

ATLoader.js
```
stopCode: '{Your bus stop}',
targetBus: '{Your bus}',
routeIds: '{The route id of your bus}',
apiKey: '{You AT developer API key}',
targetTime: '{e.g. 6:30 a.m.}'
```

WeatherLoader.js
```
apiKey: '{Your openweathermap API Key}',
zipCode: '{Your post code}',
countryCode: '{you country code in lower case e.g. nz}'
```

## Deployment

This project should be deploy serverlessly on Azure, after you deploy the project, please use console to run ```npm install`` to install the nodejs dependence

## Built With

* [Azure](https://azure.microsoft.com/) - The cloud computing platform used
* [Azure Function](https://azure.microsoft.com/en-in/services/functions/) - The serverless compute platform used
* [Node.js](https://nodejs.org/) -  JavaScript runtime stack used
* [Twillo](https://twilio.com/) - Cloud communications platform used for messsaging
* [OpenWeatherMap](https://openweathermap.org/) - Weather data sourece for this project
* [Auckland Transport API](https://dev-portal.at.govt.nz/) - Bus route data sourece for this project

## Authors
* **Zeting Luo** - *Initial work* - [HicirTech](https://github.com/HicirTech)