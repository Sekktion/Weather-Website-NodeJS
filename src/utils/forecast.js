const request = require('postman-request')

const forecast = (longitude, latitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=48840e5483f4f94128802f0c7002d23b&query=' + latitude + ',' + longitude

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (response.body.error) {
      callback('Unable to find location! Try another search.', undefined)
    } else {
      const {name, region, country} = response.body.location
      const {weather_descriptions, weather_icons, temperature, feelslike, precip, wind_speed, wind_dir, humidity} = response.body.current
      const {lat, lon} = response.body.location
      callback(undefined,{
        forecast: weather_descriptions[0],
        image_forecast: weather_icons[0],
        temperature,
        feelslike,
        humidity,
        wind_speed,
        wind_dir,
        precipitation: precip,
        latitude: lat,
        longitude: lon,
        city: name,
        country,
        region
      })
    }
  })
}

module.exports = forecast
