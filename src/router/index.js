import React from 'react';
import {
  Route,
} from 'react-router-dom';
import {
  ConnectedRouter,
} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import app from '../page/app';

const history = createHistory();

const routerGallery = () => (
  <ConnectedRouter history={history} >
    <Route component={app} />
  </ConnectedRouter>
);

export default routerGallery;
