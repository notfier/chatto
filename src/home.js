import React from 'react';


var LoginComponent = React.createClass({
    propTypes: {
        placeholder: React.PropTypes.string
    },
    render: function() {
        return (
            <input type='text' placeholder={ this.props.placeholder }></input>
        );
    }
});

var EnterButton = React.createClass({
    render: function() {
        return (
            <input type="button" value="Enter world"></input>
        )
    }
});

export var Home = React.createClass({
    render: function() {
        return (
            <div>
                <div className="title">
                    <h2>Hello into Chatto World!</h2>
                </div>
                <div className="form">
                    <form>
                        <LoginComponent placeholder="Enter your chat name"/>
                        {/* use only username for authentication now */}
                        <EnterButton />
                    </form>
                </div>
            </div>
        )
    }
});
