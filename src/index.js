import React from 'react';
import ReactDOM from 'react-dom';
import YellModule from './module';
import App from './App';

export default function app() {
  console.log(YellModule(), 'sdfsf');
}

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('app')
  );
}

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1200);
  render();
  if (module.hot) {
    module.hot.accept(function() {});
  }
}

if (process.env.NODE_ENV === 'production') {
  if (!window.CV) {
    window.CV = {};
  }
  window.CV.surveyShowReady = render;
}
