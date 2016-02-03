import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
const image = require( './images/potd-husky_3235255k.jpg' );


var GeneralMessage = React.createClass({

    render: function() {
console.log( image, 1 )
        return(
            <div>
                <p>Choose anyone from your friends</p>
            </div>
        );
    }
});

var Users = React.createClass({
    render: function() {
        return(
            <div className='users'>
                <ul>
                    <li>
                        <a href='#'>
                            <div className='user-logo'>
                                <img className='user-photo' src='/static/b992e86271055c68b988de45e8292c70.jpg'></img>
                            </div>
                            <div className='user-name'>
                                <span>user1</span>
                            </div>
                            <div className='user-time'>
                                <span>7:51 pm</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
});

var Messages = React.createClass({
    render: function() {
        return(
            <div className='messages'>
                <div>Messages</div>
            </div>
        )
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
                    <div className='top-block'>
                        <div className='greetings'>You are logged in, notfier! Welcome!</div>
                        <div className='logout'>
                            <a href='#' onClick={ this.logout }>Logout</a>
                        </div>
                    </div>
                    <div className='chat-block'>
                        <Users />
                        <Messages />
                    </div>
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
