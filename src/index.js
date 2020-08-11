import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Page from './Page.js';
import * as backend from './backend';

// import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Page}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

backend.startCollecting();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
