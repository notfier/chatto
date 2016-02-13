import React from 'react';
import { render } from 'react-dom';


class UsernameInput extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            usernameValue: '',
            usernameError: ''
        }
        this.changeUsername = this.changeUsername.bind( this );
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
            // const usernameValue = this.refs.usernameInput.getDOMNode().value;
            this.props.onChange( value );
        }
    }

    render() {
        return (
            <div className='form-input'>
                <input
                    type='text'
                    ref='usernameInput'
                    placeholder="Enter your chatname"
                    value={ this.state.value }
                    onChange={ this.changeUsername }
                ></input>
                <span>{ this.state.usernameError }</span>
            </div>
        )
    }
};