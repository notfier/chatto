import React from 'react';
import { render } from 'react-dom';


class PasswordInput extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            password: '',
            passwordError: ''
        }
        this.changePassword = this.changePassword.bind( this );
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
            });
            this.props.onChange( value );
        }
    }

    render() {
        return(
            <div className='form-input'>
                <input
                    type='password'
                    ref='passwordInput'
                    placeholder="Enter your password"
                    value={ this.state.value }
                    onChange={ this.changePassword }
                ></input>
                <span>{ this.state.passwordError }</span>
            </div>
        )
    }
};
