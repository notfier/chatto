import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

import { Messages } from './components/Messages';

import image from './static/images/potd-husky_3235255k.jpg';
import menuSVG from './static/icons/ic_menu_black_24px.svg';
import exitSVG from './static/icons/ic_exit_to_app_black_24px.svg';
import NextIcon from 'material-design-icons/navigation/svg/production/ic_apps_18px.svg';


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
        localStorage.setItem( 'token', undefined );
        window.location.assign( '/' );
    }

    render() {
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
};
