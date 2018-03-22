import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import App from '../page/App';
import Demo from '../page/Demo';

export default (
  <Router history={hashHistory} >
    <Route component={App} path='/'>
      <Route component={Demo} path='demo'></Route>
    </Route>
  </Router>
);