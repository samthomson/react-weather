var React = require('react')

var GetWeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = ''
            this.props.onSearch(location)
        }
    },
    render: function() {
        return (
            <div>
                <h3>Get Weather</h3>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location"/>
                    <button>Get weather</button>
                </form>
            </div>
        )
    }
})

module.exports = GetWeatherForm
