



// Functional

// Individual <li>  menu Item displaying courseName and description
let MenuItem = React.createClass({
    propTypes: {
        key: React.PropTypes.number,
        courseName: React.PropTypes.string.isRequired,
        description: React.PropTypes.string
    },

    render: function() {


        // Individual component menuItem. This child component will be embedded into the MenuItems component
        return (
            React.createElement("li", { className:'list-group-item'},
                // Using the id from props to concat the href
                React.createElement("a", {className: "menu-item-link", href: "#/item/" + this.props.id},
                    React.createElement("h2", {}, this.props.courseName),
                    React.createElement("div", {}, this.props.description)
                    // Due date element needs to be placed here
                )
            )
        )
    }
});

    // This entire MenuItems component is parent of 'MenuItem' and  child of the 'MainPage' component and will be going inside of MainPage component
let MenuItems = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },

    render: function() {
        return (
            // display our list of created li items within a ul which is created inside our MenuItems component
            React.createElement("ul", { className:'container list-group'}, this.props.items.map(i => React.createElement(MenuItem, i)))
        )
    }
});

let MainPage = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },

    render: function() {
        return (
            React.createElement(MenuItems, {items: this.props.items})
        )
    }
}); 


// Parent > Sub-parent > Child
// MainPage > MenuItems > MenuItem