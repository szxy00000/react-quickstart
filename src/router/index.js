import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import App from '../page/App';
import Demo from '../page/Demo';

export default (
  <HashRouter>
    <App>
      <Switch>
        <Route component={Demo} path='/demo'></Route>
      </Switch>
    </App>
  </HashRouter>
);