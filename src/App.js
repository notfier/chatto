import React, { Component } from 'react';
import { render } from 'react-dom';


export class App extends Component {

    render() {
        return(
            <div>
                { this.props.children }
            </div>
        )
    }

};
