const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location.toString()).then((response) => {
        response.json().then((data) => {
            if(data.error)
                return messageOne.textContent = 'Error: ' + data.error
            const {forecast, precipitation, temperature, city, country, region} = data.weatherData
            messageOne.textContent = city + ', ' + region + ', ' + country
            messageTwo.textContent = 'The weather is ' + forecast + '. It is ' + temperature + ' degrees out with a ' + precipitation + '% chance of rain.'
        })
    })
})