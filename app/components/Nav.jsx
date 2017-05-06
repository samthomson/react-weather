var React = require('react')
var {IndexLink, Link} = require('react-router')

var Nav = React.createClass({
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
                        <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>about</Link></li>
                        <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>examples</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search weather by city" />
                            </li>
                            <li>
                                <input type="submit" className="button" value="get weather" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    },
    onSearch: function (e) {
        e.preventDefault()
        alert('not implemented yet..')
    }
})

module.exports = Nav
