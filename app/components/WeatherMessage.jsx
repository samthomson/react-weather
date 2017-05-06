var React = require('react')

var WeatherMessage = ({temp, location}) => {
    return (
        <p>it's {temp}c in {location}</p>
    )
}

module.exports = WeatherMessage
