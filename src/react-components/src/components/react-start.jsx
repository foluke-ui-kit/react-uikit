/**
 * @jsx React.DOM
 */


/**
 * setup your react component
 */

var Start = React.createClass({

    /**
     * set your prop validations
     */
    //propTypes: {},

    /**
     * use to extend component functionality
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
            name: "John Hannock"
        }
    },

    /**
     * called before the component is rendered
     */
    //componentWillMount: function () {},

    /**
     * called after the component is rendered on the client
     */
    //componentDidMount: function () {},

    /**
     *
     */
    //componentWillUnmount: function () {},

    /**
     * Render the ReactElement into the DOM
     * @returns {XML}
     */
    render: function () {
        return (
            <div className="commentBox">
                <h1>
                    Hello { this.props.name } !
                </h1>
            </div>
        );
    }
});
