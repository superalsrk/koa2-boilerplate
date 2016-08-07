import React from 'react'

import { Route, Link } from 'react-router';

import { createStore, combineReducers } from 'redux'
import LoginContainer from '../containers/LoginContainer'


class App extends React.Component {

  render() {

    return (
        <LoginContainer />
    )
  }
}

export default App