import React from 'react';


export var Home = React.createClass({

    getInitialState: function() {
        return {
            usernameValue: ''
        };
    },

    changeUsername( e ) {
        console.log( 1 );
        this.setState( {
            usernameValue: e.target.value
        } );
    },

    handleChange() {
        console.log( 2, this.state );
        localStorage.setItem( 'token', this.state.usernameValue );
    },

    render: function() {
        return (
            <div className="entry">
                <div className="title">
                    <h2>Hello into Chatto World!</h2>
                </div>
                <div className="form">
                    <form>
                        <div className="inner-form">
                            <input type='text' placeholder="Enter your chatname" onChange={ this.changeUsername } ></input>
                        </div>
                        {/* use only username for authentication now */}
                        <div className="inner-form">
                            <input id="enterWorld" type="button" value="Enter world" onClick={ this.handleChange }></input>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
});
