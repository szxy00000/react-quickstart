import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './redux';

import RouterGallery from './router';


let middlewareArr = _.compact([
  applyMiddleware(thunk),
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
    {RouterGallery}
  </Provider>,
  document.getElementById('root')
);
