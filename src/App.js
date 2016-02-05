import React from 'react';
import { render } from 'react-dom';


export var App = React.createClass({
    render() {
        return(
            <div>
                { this.props.children }
            </div>
        )
    }
});
