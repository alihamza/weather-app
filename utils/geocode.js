const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWxpaWhhbXphIiwiYSI6ImNrOHg0NDY0ODBsN2czZm1jc3FuajhwYjkifQ.4KJDF4aRbFCABhkduIBx7w&limit=1'

    request({url, json: true}, (error, {body: res}) => {

        if(error) {
            callback('Unable to connect to geocoding service', undefined)
        } else if(res.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            
            callback(undefined, {
                location: res.features[0].place_name,
                center: res.features[0].center, 
                latitude: res.features[0].geometry.coordinates[1],
                longitude: res.features[0].geometry.coordinates[0],
            })
        }
    })
}

module.exports = geocode

