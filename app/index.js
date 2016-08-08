import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, compose, combineReducers } from 'redux';


import configureStore from './store/configureStore'
import App from './containers/App'


import createBrowserHistory from 'history/lib/createBrowserHistory';

const store = configureStore();
const history = createBrowserHistory();

render(
  <Provider store={store}>
      <App {...{ history }} />
  </Provider>,
  document.getElementById('page-container')
)