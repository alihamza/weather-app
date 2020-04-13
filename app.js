const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const weatherForecast = (location) => geocode(location, (error, {latitude, longitude, location}) => {

    if(error) {
        return console.log('Error', error)
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if(error) {
            return console.log('Error', error)
        }

        console.log(location)
        console.log(forecastData)
    })
})

const address = process.argv[2]

if(!address) {
    console.log('Please provide address')
} else {
    weatherForecast(address)
}