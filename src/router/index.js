import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import app from '../page/app';
import demo from '../page/demo';


export default (
  <Router history={hashHistory} >
    <Route component={app} path="/">
      <Route component={demo} path="demo"></Route>
    </Route>
  </Router>
);