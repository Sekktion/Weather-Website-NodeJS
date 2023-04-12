Small application that gathers weather data based on the geolocation inputed by the user.

The system consists of a REST API built in Node.JS that handles requests from a client inputting an arbitrary location, converting it to Geolocational Codes utilizing the Geocode API.
Then it searches for the location's current weather using a free weather search API and finally shows it to the client on screen.
