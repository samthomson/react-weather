var React = require('react')

var WeatherMessage = ({temp, location}) => {
    return (
        <p className="text-center">it's {temp}c in {location}</p>
    )
}

module.exports = WeatherMessage
