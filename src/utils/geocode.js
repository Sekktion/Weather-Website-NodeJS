const request = require('postman-request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoic2Vra3Rpb24iLCJhIjoiY2tjZXNkNDFtMDR3eTJxbnFkbGVjNmV2diJ9._U-R0JTFiiZzRX1tVnzL_g&limit=1"

    request({ url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to location service!',undefined)
        } else if (!response.body.features || response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const {center, place_name} = response.body.features[0]
            callback(undefined, {
                latitude: center[1],
                longitude: center[0],
                location: place_name
            })
        }
    })
}

module.exports = geocode