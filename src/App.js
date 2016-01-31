import React from 'react';
import { render } from 'react-dom';


export var App = React.createClass({
    render() {
        return(
            <div>
                <h1 id="logo">Chatto</h1>
                { this.props.children }
            </div>
        )
    }
});
