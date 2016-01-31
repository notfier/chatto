import React from 'react';
import { render } from 'react-dom';


export var Dashboard = React.createClass({

    componentWillMount: function() {
        console.log('me here!')
    },

    logout: function() {
        localStorage.setItem( 'token', undefined );
    },

    render: function() {
        if ( localStorage.token == 'notfier' ) {
            return(
                <div>
                    <p>You are logged in, notfier! Welcome!</p>
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
