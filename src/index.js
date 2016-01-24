import './styles/fonts/ralewayThin.ttf';
import './styles/styles.styl';

import React from 'react';
import { render } from 'react-dom';

import { Home } from './home';


render(
    <Home />,
    document.getElementById( 'root' )
);
