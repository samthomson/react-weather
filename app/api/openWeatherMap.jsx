var axios = require('axios')

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a9353e12593ff646b6ad20cf55216c1e&units=metric'

// a9353e12593ff646b6ad20cf55216c1e

module.exports = {
    getTemp: function (location) {
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodeURIComponent(location)}`

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (err) {
            throw new Error(err.data.message)
        })
    }
}
