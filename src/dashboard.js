import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

import { Messages } from './components/Messages';

import image from './static/images/potd-husky_3235255k.jpg';
import menuSVG from 'material-design-icons/navigation/1x_web/ic_menu_white_36dp.png';
import exitSVG from 'material-design-icons/action/2x_web/ic_exit_to_app_white_36dp.png';
import clearSVG from 'material-design-icons/content/1x_web/ic_clear_white_24dp.png';


class Users extends Component {

    render() {
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

};


export class Dashboard extends Component {

    constructor( props ) {
        super( props );
    }

    componentWillMount() {
        console.log('me here!')
    }

    logout() {
        window.location.assign( '/' );
        localStorage.setItem( 'token', "{}" );
    }

    render() {
        const loginData = JSON.parse( localStorage.token );
        if ( loginData.username === 'notfier' ) {
            return(
                <div className='container'>
                    <div className='top-block'>
                        <div className='over-logo'>
                            <a href='javascript:void(0)'>
                                <div className='logo'>
                                        <img src={ menuSVG }/>
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

};
