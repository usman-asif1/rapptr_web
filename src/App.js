import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ToastContainer } from 'react-toastify'

import Landing from 'containers/Landing'
import Auth from 'containers/Auth'

const hist = createBrowserHistory()

const App = () => (
  <Router history={hist}>
    <ToastContainer />

    <Switch>
      <Route path="/login" component={Auth} />
      <Route path="/signup" component={Auth} />
      <Route exact path="/" component={Landing} />
    </Switch>
  </Router>
)

export default App
