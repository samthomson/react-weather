var React = require('react')

var About = (props) => {
    return (
        <div>
            <h3>About Component</h3>
            <p>tools I used:</p>
            <ol>
                <li>
                    <a href="https://facebook.github.io/react">react</a>
                </li>
                <li>
                    <a href="http://openweathermap.org">open weather map API</a>
                </li>
            </ol>
        </div>
    )
}

module.exports = About
