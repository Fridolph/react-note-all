import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './containers/Home'
import Create from './containers/Create'
import Edit from './containers/Edit'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/" exact component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/edit/:id" component={Edit} />
        </div>
      </Router>
    )
  }
}
