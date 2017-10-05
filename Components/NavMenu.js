
let NavMenu = React.createClass({
    render: function() {



        // NAVIGATION IS EMBEDDED INTO EVERY PAGE.
        return (
            // UL to hold all of our links
            React.createElement("ul", {className: "nav container"},

                // <a> link to HOME / MAIN Page
                React.createElement("li", {className: 'nav-item'},
                    React.createElement("a", {href: "#", className:"nav-link"}, "Menu")
                ),

                // <a> link to NEW TASK Page
                React.createElement("li", { className:"nav-item"},
                    React.createElement("a", {href: "#newitem", className:"nav-link"}, "Add New Item")
                )
            )
        )
    }
}); 
