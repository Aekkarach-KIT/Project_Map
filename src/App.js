import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Login from './component/Login'
import Page_home from './component/Page_home'
import Page_covid from './component/Page_covid'
import Page_table from './component/Page_table'
import Page_show from './component/Page_show'
import Page_contact from './component/Page_contact'

import 'mdbreact/dist/css/mdb.css'
import fire from './config/fire'
import { Route } from 'react-router-dom'
import Home from './component/Home'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount () {
    this.authListener()
  }

  authListener () {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user: null })
      }
    })
  }

  render () {
    if (this.state.user == null) {
      return (
        <div>
          <Login />
        </div>
      )
    }
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/page_home' component={Page_home} />
        <Route path='/page_covid' component={Page_covid} />
        <Route path='/page_table' component={Page_table} />
        <Route path='/page_show' component={Page_show} />
        <Route path='/page_contact' component={Page_contact} />
      </div>
    )
  }
}
export default App