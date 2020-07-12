const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const imageForecast = document.querySelector('#image-forecast')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''

    fetch('/weather?address=' + location.toString()).then((response) => {
        response.json().then((data) => {
            if(data.error)
                return messageOne.textContent = 'Error: ' + data.error
            const {forecast, image_forecast, precipitation, temperature, city, country, region, wind_speed, wind_dir, humidity} = data.weatherData
            messageOne.textContent = city + ', ' + region + ', ' + country
            imageForecast.setAttribute('src', image_forecast)
            messageTwo.textContent = 'The weather is ' + forecast + '. It is ' + temperature + ' ºC out with a ' + precipitation + '% chance of rain.'
            messageThree.textContent = 'Additional info: '
            messageFour.textContent = 'The wind is blowing at a speed of ' + wind_speed + 'km/h to the ' + wind_dir + '. The humidity is ' + humidity + '%.'
        })
    })
})