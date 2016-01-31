import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';


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
