import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
const rootElement = document.getElementById('root');

setInterval(function() {
  ReactDOM.render(<App date={new Date()}/>, rootElement);
},500);
