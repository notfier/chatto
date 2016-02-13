import React from 'react';
import { render } from 'react-dom';


class EmailInput extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            'email': '',
            'emailError': ''
        };
        this.changeEmail = this.changeEmail.bind( this );
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

    render() {
        return(
            <div className='form-input'>
                <input
                    type='email'
                    placeholder="Enter your email"
                    value={ this.state.value }
                    onChange={ this.changeEmail }
                ></input>
                <span>{ this.state.emailError }</span>
            </div>
        )
    }
}