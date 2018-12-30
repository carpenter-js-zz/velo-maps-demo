/* global google */ 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RenderMapComponent } from './components/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RenderMapComponent />, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
