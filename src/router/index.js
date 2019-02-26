import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import AsyncComponent from 'component/asyncComponent';
import App from '../page/App';
const Demo = AsyncComponent(() => import('../page/Demo'));

export default (
  <HashRouter>
    <App>
      <Switch>
        <Route component={Demo} path='/demo'></Route>
      </Switch>
    </App>
  </HashRouter>
);