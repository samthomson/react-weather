var React = require('react')
var {IndexLink, Link} = require('react-router')

var Nav = () => {
    return (
        <div>
            <h2>Nav</h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            &nbsp;
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>about</Link>
            &nbsp;
            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>examples</Link>
        </div>
    )
}

module.exports = Nav
