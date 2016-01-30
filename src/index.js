import './styles/styles.styl';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

import { Home } from './home';


render(
    (
        <Router history={ browserHistory }>
            <Route path='/' component={ Home }>
            </Route>
        <Router/>
    ),
    document.getElementById( 'root' )
);
