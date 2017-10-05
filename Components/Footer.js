

// FUNCTIONAL

// Stuff that goes within our footer
var FooterItem = React.createClass({
    propTypes: {
        text: React.PropTypes.string

    },
    render: function() {
        return (


            React.createElement("p", {className: "container"},
                this.props.text
            )
        )
    }
});



var Footer = React.createClass({
    propTypes: {
        items: React.PropTypes.array
    },
    render: function() {
        return (
            React.createElement("div", {}, this.props.items.map(i => React.createElement(FooterItem, i)))
        )
    }
});

// Display everything in the footer using .map method and outputting every one of the footerItem components