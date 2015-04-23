/** @jsx React.DOM */

var React = require('react');
var $ = require('jquery');
var Elements = require('./components/react-elements.jsx');
var Icons = require('./components/svg-icons/component.jsx');
/**
 *
 * @type {HTMLElement}
 */

$.fn.reactElement = function (settings) {

    settings = $.extend({
        component: 'element',
        label: 'Send',
        description: 'This is for text/descriptions.....',
        type: 'button',
        size: '48',
        width: '',
        height: '',
        color: '#000',
        icon: 'twitter',
    }, settings);

    return this.each(function () {

            var opts = $(this);
            var component = opts.data('component') ? opts.data('component') : settings.component;
            var id = opts.attr('id');
            var label = opts.data('label') ? opts.data('label') : settings.label;
            var type = opts.data('type') ? opts.data('type') : settings.type;
            var icon = opts.data('icon') ? opts.data('icon') : settings.icon;
            var size = opts.data('size') ? opts.data('size') : settings.size;


            //console.log(opts.attr('id'));

            switch (component) {
                case 'button':
                    React.render(<Elements.Buttons label={ label } type={ type } />, document.getElementById(id));
                    break;
                case 'copyright':
                    React.render(<Elements.Copyright slug={ label } />, document.getElementById(id));
                    break;
                case 'svg-icon':
                    React.render(<Icons.Social icon={ icon } size={ size } />, document.getElementById(id));
                    break;
                default:
                    React.render(<Elements />, document.getElementById(id));
            }

        }

    );

}

$(document).ready(function ($) {
    $('react-element').reactElement();
});
