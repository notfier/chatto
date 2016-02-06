import React, { Component } from 'react';
import { render } from 'react-dom';


export class Messages extends Component {

    render() {
        return(
            <div className='messages'>
                <div id='please-choose'>
                    <p>Please choose a chat to start messaging</p>
                </div>
            </div>
        )
    }

};
