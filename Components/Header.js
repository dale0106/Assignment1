
// FUNCTIONAL

let Header = React.createClass({
    // HEADER THAT SHOWS ON EVERY PAGE
    render: function() {
        return(
            React.createElement("div", {className: "container"},
                React.createElement("h1", {}, "Homework To-Do List")
            )
        )
    }
}); 
