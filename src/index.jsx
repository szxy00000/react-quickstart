import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { createStore , applyMiddleware ,compose  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './redux';
import createHistory from 'history/createHashHistory';
import {
  routerMiddleware,
} from 'react-router-redux';
import RouterGallery from './router';

const history = createHistory();

let middlewareArr = _.compact([
  applyMiddleware(  routerMiddleware(history) ,thunk ),
  window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']({
    actionSanitizer: action => {
      return {
        ...action,
        type: action.type.toString(),
      };
    }
  })
]);

const store = createStore(
  reducers,
  compose(...middlewareArr)
);


ReactDOM.render(
  <Provider store={store}>
    <RouterGallery />
  </Provider>,
  document.getElementById('root')
);
