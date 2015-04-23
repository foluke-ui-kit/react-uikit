/** React.DOM */


var React = require('react');


/**
 * setup your react component
 */

var Hello = React.createClass({
    render: function () {
        return (
            <div className="hello">
                <h1>Hello { this.props.name } </h1>
            </div>
        );
    }
});

/**
 * Namespaced Components : components let you use one component that has other components as attributes
 * {React.render(<Hello.Child />, document.getElementById('text'));}
 */
Hello.Child = React.createClass({
    render: function () {
        return (
            <div>
                I'am a child component
            </div>
        );
    }
});

module.exports = Hello;

