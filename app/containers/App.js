import React from 'react'

import LoginContainer from '../containers/LoginContainer';
import DashboardContainer from '../containers/DashboardContainer';

import { Router, Route, useRouterHistory} from 'react-router';
import { createHashHistory } from 'history';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

class App extends React.Component {

  render() {

    return (
          <Router history={appHistory} >
              <Route path='/' component={LoginContainer}/>
              <Route path='/' component={LoginContainer}/>
              <Route path='/signup' component={LoginContainer}/>
              <Route path='/main' component={DashboardContainer}/>
          </Router>
    )
  }
}

export default App