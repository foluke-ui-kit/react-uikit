/** @jsx React.DOM */
var React = require('react');
var $ = require('jquery');

/**
 *
 * @type {HTMLElement}
 */
var Hello = require('./components/react-hello.jsx');
var Element = require('./components/react-elements.jsx');
var Icn = require('./components/svg-icons-kit/component.jsx');
var Svg = require('./components/svg-icons-kit/react-iconsets.jsx');
var SvgIcon = require('./components/svg-icons-kit/svg-icons.jsx');


var component = document.querySelector("react-hello");
var myname = component.dataset.name;
var copyright = document.querySelector("rxt-copyright");


React.render(<Hello name={myname} />, component);
React.render(<Hello name="Shawn..." />, document.getElementById('hello'));
React.render(<Hello.Child />, document.getElementById('test'));
React.render(<Element.Copyright slug="All rights reserved" />, copyright);
React.render(<Icn.Social />, document.getElementById('icon'));
React.render(<Svg iconID="directions" iconsetUrl="icon.xml" size="48" fill="red"  />, document.getElementById('iconset'));
React.render(<SvgIcon />, document.getElementById('svgicon'));
$.fn.reactButtons = function (settings) {

    settings = $.extend({
        //options defaults
        component: 'element',
        label: 'Send',
        type: 'button',
        rc: ''
    }, settings);

    return this.each(function () {

            var opts = $(this);
            var component = opts.data('component') ? opts.data('component') : settings.component;
            var id = opts.attr('id');
            var label = opts.data('label') ? opts.data('label') : settings.label;
            var type = opts.data('type') ? opts.data('type') : settings.type;
            //console.log(opts.attr('id'));

            switch (component) {
                case 'button':
                    React.render(<Element.Buttons label={ label } type={ type } />, document.getElementById(id));
                    break;
                case 'copyright':
                    React.render(<Element.Copyright slug="All rights reserved" />, copyright);
                    break;
                default:
                    React.render(<Hello.Child />, document.getElementById('test'));
            }

        }

    );

}

$(document).ready(function ($) {
    $('button-element').reactButtons();
});