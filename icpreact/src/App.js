import React, { Component } from 'react'
import './App.css';

import Interviews from './Components/Interviews';
import ShowInterview from './Components/ShowInterview';
import NewInterview from './Components/NewInterview';
import EditInterview from './Components/EditInterview';

import Users from './Components/Users';
import ShowUser from './Components/ShowUser';
import NewUser from './Components/NewUser';
import EditUser from './Components/EditUser';

import {
  Route,
  HashRouter,
} from "react-router-dom";

require('dotenv').config()

export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div className="content App">
              <Route exact path="/" component={Interviews}/>
              <Route exact path="/interviews" component={Interviews}/>
              <Route exact path="/interviews/new" component={NewInterview}/>
              <Route exact path="/interviews/:id" component={ShowInterview}/>
              <Route exact path="/interviews/:id/edit" component={EditInterview}/>
              
              <Route exact path="/users" component={Users}/>
              <Route exact path="/users/new" component={NewUser}/>
              <Route exact path="/users/:id" component={ShowUser}/>
              <Route exact path="/users/:id/edit" component={EditUser}/>
          </div>
        </HashRouter>
      </div>
    )
  }
}