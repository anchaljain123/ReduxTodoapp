import React from 'react'
import {Route} from 'react-router-dom'
import LandingPage from '../LandingPg'
import DashBoard from '../DashBoard'
import Signup from '../Signup'
import Login from '../Login'
import "../../assets/css/style.css"
/*
 Stateless Component containing Routes
 */
const App = () => {
  return (
    <div>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={Login}/>
      <Route path="/dashboard" component={DashBoard}/>
    </div>
  )
};


export default App;