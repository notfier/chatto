import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';


var GeneralChat = React.createClass({

    render: function() {
        return(
            <div>
                Users online: "Bratuni"
                <hr/>
                <p>Bratuni: "Hello!"</p>
                <br/>
                <textarea name='chat' placeholder="Enter your message"></textarea>
                <br/>
                <input type='button' value='Send'/>
            </div>
        );
    }
})

export var Dashboard = React.createClass({

    componentWillMount: function() {
        console.log('me here!')
    },

    logout: function() {
        localStorage.setItem( 'token', undefined );
        window.location.assign( '/' );
    },

    render: function() {
        if ( localStorage.token == 'notfier' ) {
            return(
                <div>
                    <p>You are logged in, notfier! Welcome!</p>
                    <a href='#' onClick={ this.logout }>Logout</a>
                    <GeneralChat />
                </div>
            );
        } else {
            return(
                <div>
                    <p>You are not logged! =P</p>
                </div>
            )
        }
    }
});
