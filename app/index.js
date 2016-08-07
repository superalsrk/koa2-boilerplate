
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { createStore, compose, combineReducers } from 'redux';


import configureStore from './store/configureStore'
import App from './containers/App'
import LoginContainer from './containers/LoginContainer'


const store = configureStore()

render(
  <Provider store={store}>

      <App />
    
  </Provider>,
  document.getElementById('page-container')
)