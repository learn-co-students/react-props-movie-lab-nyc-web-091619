import React from 'react';
import ReactDOM from 'react-dom';
// ES5 version is:
// var ReactDOM = require('react-dom')
// ReactDOM provides:  render(), hydrate(), unmountComponentAtNode(), 
// findDOMNode() and createPortal()
import './index.css';
import MovieShowcase from './MovieShowcase';

// render our MovieShowcase to the "root" div in ./public/index.html
ReactDOM.render(<MovieShowcase />, document.getElementById('root'));
