/** @jsx React.DOM */

var React = require('react');
var $ = require('jquery');
var Elements = require('./components/react-elements.jsx');
/**
 *
 * @type {HTMLElement}
 */


var copyright = document.querySelector("element-copyright");
React.render(<Elements.Copyright slug="All rights reserved" />, copyright );