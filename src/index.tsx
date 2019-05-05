import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Remember to 'turn off' when building for production
// otherwise uses more resources than necessary
if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe');
  const config = {
    rules: [
      {
        id: 'heading-order',
        enabled: false,
      },
    ],
  };
  axe(React, ReactDOM, 1000, config);
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
