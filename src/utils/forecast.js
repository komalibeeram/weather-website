const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e23f6f8f9e600a51e514300fbe78a695/' + latitude + ',' + longitude + '?units=si'
    
    request({url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to the weather sevices!', undefined)
        }else if(body.error){
            callback('Unable to find location!', undefined)
        }else {
            callback(undefined, body.daily.data[0].summary+' It is currently '+body.currently.temperature+' degrees out. This high today is '+ body.dail.data[0].temperatureHigh+ ' with a low of '+ body.daily.data[0].temperatureLow+'. There is a '+body.currently.precipProbability+'% chance of rain.')            
        }
    }
)
}

module.exports = forecast