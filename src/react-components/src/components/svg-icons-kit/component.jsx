/**
 * @jsx React.DOM
 */

/**
 *
 * @type {*|exports}
 */
var React = require('react'),
    IconFactory = require('react-icon-factory');
    //default_iconset = require('./social-icons.js');

var Icon = IconFactory({

    blogger: <g>
        <path id="blogger" d="M20 2h-16c-1.1 0-1.99.9-1.99 2l-.01 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm-4 7v1c0 .55.45 1 1 1s1 .45 1 1v3c0 1.66-1.34 3-3 3h-6c-1.66 0-3-1.34-3-3v-7c0-1.66 1.34-3 3-3h4c1.66 0 3 1.34 3 3v1zm-6.05 1h2.6c.55 0 1-.45 1-1s-.45-1-1-1h-2.6c-.55 0-1 .45-1 1s.45 1 1 1zm4.05 3h-4.05c-.55 0-1 .45-1 1s.45 1 1 1h4.05c.55 0 1-.45 1-1s-.45-1-1-1z"></path>
    </g>,
    facebook: <g>
        <path d="M20 2h-16c-1.1 0-1.99.9-1.99 2l-.01 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm-1 2v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v7h-3v-7h-2v-3h2v-2.5c0-1.93 1.57-3.5 3.5-3.5h2.5z"></path>
    </g>,
    github: <g>
        <path d="M7.2 6.6h-.1c-.5 1.4-.2 2.3-.1 2.6-.6.7-1 1.6-1 2.6 0 3.8 2.4 4.6 4.6 4.9-.2 0-.6.2-.8.8-.4.2-1.8.7-2.6-.7 0 0-.5-.8-1.3-.9 0 0-.8 0-.1.5 0 0 .6.3.9 1.3 0 0 .5 1.7 3 1.1v3.1h5v-3.5c0-1-.4-1.5-.8-1.8 2.2-.2 4.6-1 4.6-4.8 0-1.1-.4-2-1-2.6.1-.3.4-1.2-.1-2.6 0 0-.8-.3-2.7 1-.8-.2-1.6-.3-2.5-.3-.8 0-1.7.1-2.5.3-1.4-1-2.2-1-2.6-1zm12.8 15.4h-16c-1.1 0-2-.9-2-2v-16c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2z"></path>
    </g>,
    gplus: <g>
        <path d="M11.2 8.87c0-1.02-.63-3.02-2.08-3.02-.64 0-1.32.44-1.32 1.67 0 1.18.63 2.93 1.97 2.93.06.01 1.43-.01 1.43-1.58zm-.63 4.94l-.31-.01h-.02c-.26 0-1.15.05-1.82.27-.65.24-1.42.72-1.42 1.7 0 1.08 1.04 2.23 2.96 2.23 1.52 0 2.44-1 2.44-1.97 0-.77-.46-1.24-1.83-2.22zm9.43-11.81h-16c-1.1 0-1.99.9-1.99 2l-.01 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm-10.93 17.2c-2.8 0-4.07-1.56-4.07-3.01 0-.45.14-1.59 1.48-2.39.77-.47 1.85-.78 3.14-.91-.19-.25-.34-.55-.34-.99 0-.16.02-.31.05-.46h-.38c-1.97 0-3.15-1.55-3.15-3.04 0-1.73 1.29-3.6 4.11-3.6h4.21l-.34.34-.71.71-.06.06h-.71c.41.42.9 1.12.9 2.16 0 1.4-.74 2.09-1.56 2.73-.16.12-.42.38-.42.72 0 .3.24.5.39.62.13.11.3.22.47.34.81.57 1.92 1.34 1.92 2.88 0 1.77-1.29 3.84-4.93 3.84zm9.93-7.2h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z"></path>
    </g>,
    instagram: <g>
        <path d="M20 2h-16c-1.1 0-1.99.9-1.99 2l-.01 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm-8 6c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm-7.5 12c-.28 0-.5-.22-.5-.5v-8.5h2.09c-.05.33-.09.66-.09 1 0 3.31 2.69 6 6 6s6-2.69 6-6c0-.34-.04-.67-.09-1h2.09v8.5c0 .28-.22.5-.5.5h-15zm15.5-13.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2z"></path>
    </g>,
    linkedin:    <g><path d="M20 2h-16c-1.1 0-1.99.9-1.99 2l-.01 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm-12 17h-3v-9h3v9zm-1.5-10.69c-1 0-1.81-.81-1.81-1.81s.81-1.81 1.81-1.81 1.81.81 1.81 1.81-.81 1.81-1.81 1.81zm12.5 10.69h-3v-5.3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.3h-3v-9h3v1.2c.52-.84 1.59-1.4 2.5-1.4 1.93 0 3.5 1.57 3.5 3.5v5.7z"></path></g>,
    pininterest:   <g><path d="M20 2h-16c-1.1 0-1.99.9-1.99 2l-.01 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm-7 14.2c-.8 0-1.57-.34-2.12-.92l-.95 3.2-.07.21-.03-.01c-.19.32-.54.52-.93.52-.61 0-1.1-.49-1.1-1.1l.01-.15h-.01l.05-.18 1.85-5.56s-.2-.61-.2-1.47c0-1.72.92-2.23 1.66-2.23.74 0 1.42.27 1.42 1.31 0 1.34-.89 2.03-.89 3 0 .74.6 1.34 1.34 1.34 2.33 0 3.16-1.76 3.16-3.41 0-2.18-1.88-3.95-4.2-3.95-2.32 0-4.2 1.77-4.2 3.95 0 .67.19 1.34.54 1.94.09.16.14.33.14.51 0 .55-.45 1-1 1-.36 0-.69-.19-.87-.5-.53-.9-.82-1.92-.82-2.96.02-3.27 2.8-5.94 6.22-5.94s6.2 2.67 6.2 5.95c0 2.63-1.63 5.45-5.2 5.45z"></path></g>,
    tumblr:   <g><path d="M20 2h-16c-1.1 0-1.99.9-1.99 2l-.01 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm-4 9h-3v3.9c0 .73.14 1.1 1.1 1.1h1.9v3s-1.03.1-2.1.1c-2.65 0-3.9-1.62-3.9-3.4v-4.7h-2v-2.8c2.41-.2 2.62-2.04 2.8-3.2h2.2v3h3v3z"></path></g>,
    twitter:    <g><path d="M20 2h-16c-1.1 0-1.99.9-1.99 2l-.01 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm-2.29 7.33c-.06 4.62-3.02 7.78-7.42 7.98-1.82.08-3.14-.5-4.28-1.23 1.34.21 3.01-.32 3.9-1.09-1.32-.13-2.1-.8-2.46-1.88.38.07.78.05 1.14-.03-1.19-.4-2.04-1.13-2.08-2.67.33.15.68.29 1.14.32-.9-.5-1.55-2.35-.8-3.57 1.32 1.45 2.91 2.63 5.52 2.79-.65-2.8 3.06-4.32 4.61-2.44.66-.13 1.19-.38 1.7-.65-.21.65-.62 1.1-1.12 1.47.54-.07 1.03-.21 1.44-.41-.25.53-.81 1.01-1.29 1.41z"></path></g>,
    youtube: <g><path d="M20 2h-16c-1.1 0-1.99.9-1.99 2l-.01 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm-1.49 15.5c-.45.15-3.73.5-6.51.5-2.77 0-6.05-.35-6.5-.5-1.17-.39-1.5-2.8-1.5-5.5s.33-5.11 1.5-5.5c.45-.15 3.73-.5 6.5-.5 2.78 0 6.06.36 6.51.51 1.17.39 1.49 2.79 1.49 5.49s-.32 5.11-1.49 5.5zm-8.51-2l5.5-3.5-5.5-3.5v7z"></path></g>
});


/**
 * Briefly describe your Element here
 */

var Icons = React.createClass({

    render: function () {
        return (
            <div>
               <p>Hello World</p>
            </div>
        );
    }

});


/**
 * setup your react component
 */
Icons.Social = React.createClass({

    /**
     * set your prop validations
     *  // You can declare that a prop is a specific JS primitive. By default, these
     *  // are all optional.
     *  optionalArray: React.PropTypes.array,
     *  optionalBool: React.PropTypes.bool,
     *  optionalFunc: React.PropTypes.func,
     *  optionalNumber: React.PropTypes.number,
     *  optionalObject: React.PropTypes.object,
     *  optionalString: React.PropTypes.string,
     */
    //propTypes: {},

    /**
     * define misins
     */
    //mixins: [],

    /**
     * Set the default values for your states
     */
    //getInitialState: function () {},

    /**
     * det the props default
     */
    getDefaultProps: function () {
        return {
            icon: 'twitter',
            size: '24',
            style: {fill:'#808080'}
        }
    },

    /**
     *
     */
    //componentWillMount: function () {},

    /**
     *
     */
    //componentWillReceiveProps: function () {},

    /**
     *
     */
    //componentDidMount: function () {},

    /**
     *
     */
    //componentWillUnmount: function () {},

    render: function () {
        return (
                <Icon icon={ this.props.icon } size={ this.props.size } style={ this.props.style } />
        );
    }
});


/**
 * export the element
 */
module.exports = Icons;
