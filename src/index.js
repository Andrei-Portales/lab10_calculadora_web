import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import './index.scss';
import icon from './assets/images/calculator.svg';

const link = document.createElement('link');
link.href = icon;
link.rel = 'icon';
document.head.appendChild(link);

ReactDOM.render(<App />, document.getElementById('root'));
