import React from 'react';
import ReactDOM from 'react-dom';
import Reset from './styles/Reset.js'
import Base from './styles/Base.js'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Base />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);