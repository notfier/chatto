import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';


export class Home extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            usernameValue: '',
            email: '',
            password: '',
            usernameError: '',
            passwordError: '',
            emailError: ''
        };
        this.changeUsername = this.changeUsername.bind( this );
        this.changePassword = this.changePassword.bind( this );
        this.changeEmail = this.changeEmail.bind( this );
        this.handleChange = this.handleChange.bind( this );
    }

    changeUsername( event ) {
        const value = event.target.value;
        if ( value === '' ) {
            this.setState({
                usernameError: 'username cannot be empty'
            });
        } else if ( value.length > 15 ) {
            this.setState({
                usernameError: 'username cannot be greater than 15 symbols'
            });
        } else {
            this.setState({
                usernameValue: event.target.value,
                usernameError: ''
            });
        }
    }

    changePassword( event ) {
        const value = event.target.value;
        if ( value.length > 20 ) {
            this.setState({
                passwordError: 'password cannot be greater than 20 symbols'
            });
        } else if ( value.length < 6 ) {
            this.setState({
                passwordError: 'password cannot be less than 6 symbols'
            });
        } else {
            this.setState({
                password: event.target.value,
                passwordError: ''
            })
        }
    }

    changeEmail( event ) {
        const re = new RegExp( '\w+@\w+.\w+[.]\w+' );
        const value = event.target.value;
        if ( value.match( re ) ) {
            this.setState({
                email: event.target.value,
                emailError: ''
            })
        } else {
            this.setState({
                emailError: 'Please, enter a valid email'
            })
        }
    }

    handleChange( event ) {
        localStorage.setItem( 'token', JSON.stringify({
            'username': this.state.usernameValue,
            'email': this.state.email,
            'password': this.state.password
        }) );
    }

    handleError( key, message ) {
        console.log('error', message, key )
        this.setState({
            error: message
        })
    }

    render() {
        console.log( this.state)
        return (
            <div className="entry">
                <div className="title">
                    <h2>Hello into Chatto World!</h2>
                </div>
                <div className="form">
                    <form>
                        <div className="inner-form">
                            <input
                                type='text'
                                placeholder="Enter your chatname"
                                value={ this.state.value }
                                onChange={ this.changeUsername }
                                // onError={ this.handleError }
                            ></input>
                            <span>{ this.state.usernameError }</span>
                            <input
                                type='email'
                                placeholder="Enter your email"
                                value={ this.state.value }
                                onChange={ this.changeEmail }
                                // onError={ this.handleError }
                            ></input>
                            <span>{ this.state.emailError }</span>
                            <input
                                type='password'
                                placeholder="Enter your password"
                                value={ this.state.value }
                                onChange={ this.changePassword }
                                // onError={ this.handleError }
                            ></input>
                            <span>{ this.state.passwordError }</span>
                        </div>
                        {/* use only username for authentication now */}
                        <div className="inner-form">
                            <Link to="/dashboard">
                                <input
                                    id="enterWorld"
                                    type="button"
                                    value="Submit"
                                    onClick={ this.handleChange }
                                ></input>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};
