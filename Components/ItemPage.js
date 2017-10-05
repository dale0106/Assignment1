
let ItemPage = React.createClass({
    propTypes: {
        courseName: React.PropTypes.string.isRequired,
        description: React.PropTypes.string
    },

    // FUNCTIONAL

    render: function() {
        return (
            React.createElement("div", {className:'container'},
                React.createElement("br",{}),
                React.createElement("h3", {}, this.props.courseName),
                React.createElement("p", {}, this.props.description)
                // Need to add due date p here


            )
        )
    }
}); 
