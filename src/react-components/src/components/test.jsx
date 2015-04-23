'use strict';
/** @jsx React.DOM */

/**
 * setup your react component
 */

var React = require('react');

var HelloTest = React.createClass({
    render: function () {
        return (
            <div className="hello">
                <h1>Hello Shawn Sandy</h1>
            </div>
        );
    }
});

module.exports = HelloTest;
