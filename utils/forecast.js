const request = require('request')

forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=68c13cb982b5d1e65f656b657803afea&units=m&query=' + lat + ',' + long

    request({url, json: true}, (error, {body: res}) => {

        if(error) {
            callback('Unable to connect to weather service', undefined)
        } else if(res.error) {
            callback(res.error.info, undefined)
        } else {
            callback(undefined, res.current.weather_descriptions[0] + '. It is currently ' + res.current.temperature + ' degree out. It feels like ' + res.current.feelslike + ' degree out.')
        }
    })
}

module.exports = forecast