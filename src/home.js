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
            <div className="entry">
                <div className="title">
                    <h2>Hello into Chatto World!</h2>
                </div>
                <div className="form">
                    <form>
                        <div className="inner-form">
                            <LoginComponent placeholder="Enter your chat name"/>
                        </div>
                        {/* use only username for authentication now */}
                        <div className="inner-form">
                            <EnterButton />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
});
