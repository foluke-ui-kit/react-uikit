/**
 * @jsx React.DOM
 */

/**
 * include components styles
 */

require('./styles/elements.css');

/**
 *
 * @type {*|exports}
 */
var React = require('react');

/**
 *
 */
var Elements = React.createClass({

    render: function () {
        return (
            <div>
                Component description here
            </div>
        );
    }

});


/**
 * setup your react component
 */
Elements.Copyright = React.createClass({


    /**
     * det the props default
     */
    getDefaultProps: function () {
        return {
            slug: ' Rights Reserved',
            year: new Date().getFullYear()

        }
    },


    render: function () {
        return (
            <div className="site-copyrights">
            &copy; { this.props.year }
                <span className="copyright-slug"> { this.props.slug } </span>
            </div>
        );
    }
});

/**
 * setup your react component
 */
Elements.Buttons = React.createClass({

    /**
     * det the props default
     */
    getDefaultProps: function () {
        return {
            label: 'Submit',
            type: 'button',
            labelHover: 'Send it'

        }
    },

    render: function () {
        return (
            <button type= { this.props.type } className="element" >
            { this.props.label }
            </button>
        );
    }
});


/**
 * export the element
 */
module.exports = Elements;

