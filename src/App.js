import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Login from './component/Login'
import Page_home from './component/Page_home'
import Page_covid from './component/Page_covid'
import Page_table from './component/Page_table'
import Page_contact from './component/Page_contact'
import Page_env from './component/Page_env'
import Page_edu from './component/Page_edu'
import Page_worker from './component/Page_worker'

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
        <Route path='/page_contact' component={Page_contact} />
        <Route path='/page_env' component={Page_env} />
        <Route path='/page_edu' component={Page_edu} />
        <Route path='/page_worker' component={Page_worker} />
      </div>
    )
  }
}
export default App
