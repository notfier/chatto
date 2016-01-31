import './styles/styles.styl';

import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import { App } from './App';
import { Home } from './home';
import { Dashboard } from './dashboard';


render(
    (
        <Router history={ browserHistory }>
            <Route path='/' component={ App } >
                <IndexRoute component={ Home } />
                <Route path='dashboard' component={ Dashboard } />
            </Route>
        </Router>
    ),
    document.getElementById( 'root' )
);
