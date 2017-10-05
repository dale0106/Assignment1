let AddNewForm = React.createClass({
    propTypes: { 
        menuItem: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSubmit: React.PropTypes.func.isRequired
    },
    onNameChange: function (e) {
        this.props.onChange(Object.assign({}, this.props.menuItem, {
            courseName: e.target.value
        }));
    },
    onDescriptionChange: function (e) {
        this.props.onChange(Object.assign({}, this.props.menuItem, {
            description: e.target.value
        }));
    },
    onSubmit: function (e) {
        this.props.onSubmit(this.props.menuItem);
    },
    render: function () {
        return (

            // FORM
            React.createElement("form", {
                    className: 'form-group container'
                },
                // LABEL
                React.createElement("label", {}, "Course Name"),
                // INPUT - Course Name
                React.createElement("input", {
                    type: "text",
                    className: 'form-control',
                    placeholder: " Course Name",
                    value: this.props.menuItem.courseName,
                    onChange: this.onNameChange
                }),
                // BR
                React.createElement("br", {}),
                // LABEL
                React.createElement("label", {}, "Description"),
                // Input - description
                React.createElement("textarea", {
                    className: 'form-control',
                    placeholder: "Description",
                    value: this.props.menuItem.description,
                    onChange: this.onDescriptionChange
                }),
                // BR
                React.createElement("br", {}),
                // Submit btn
                React.createElement("button", {
                    type: "button",
                    className: 'btn btn-primary',
                    onClick: this.onSubmit
                }, "Submit")
            )
        )
    }
});

let AddNewPage = React.createClass({
    propTypes: {
        menuItem: React.PropTypes.object.isRequired,
        onNewMenuItemChange: React.PropTypes.func.isRequired,
        onSubmitNewItem: React.PropTypes.func.isRequired
    },

    render: function () {
        return (
            // Div which will hold our New Form component
            React.createElement("div", {},
                React.createElement(AddNewForm, {
                    menuItem: this.props.menuItem,
                    onChange: this.props.onNewMenuItemChange,
                    onSubmit: this.props.onSubmitNewItem
                })
            )
        )
    }
});