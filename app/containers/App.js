import React from 'react'

import { Route, Link } from 'react-router';

import { createStore, combineReducers } from 'redux';

import LoginContainer from '../containers/LoginContainer';
import DashboardContainer from '../containers/DashboardContainer';


class App extends React.Component {

  render() {

    return (
        <LoginContainer />
        // <DashboardContainer />
    )
  }
}

export default App