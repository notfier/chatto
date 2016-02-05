import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

import image from './static/images/potd-husky_3235255k.jpg';
import menuSVG from './static/icons/ic_menu_black_24px.svg';
import exitSVG from './static/icons/ic_exit_to_app_black_24px.svg';
import NextIcon from 'material-design-icons/navigation/svg/production/ic_apps_18px.svg';


var Users = React.createClass({
    render: function() {
        console.log( NextIcon )
        return(
            <div className='users'>
                <ul>
                    <li>
                        <a href='#'>
                            <div className='user-logo'>
                                <img className='user-photo' src={ image }></img>
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
                        <div className='over-logo'>
                            <a href='javascript:void(0)'>
                                <div className='logo'>
                                        <img src={ NextIcon }/>
                                        <h2>Chatto</h2>
                                </div>
                            </a>
                        </div>
                        <div className='top-right-panel'>
                            <div className='greetings'><p>You are logged in, notfier! Welcome!</p></div>
                            <div className='logout'>
                                <a href='#' onClick={ this.logout }>
                                    <img className='svg-colour' src={ exitSVG }/>
                                </a>
                            </div>
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
