import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from './components/Landing/Landing'
import Sketchpad from './components/Sketchpad/Sketchpad'
import Login from './components/Landing/Login/Login'
import Signup from './components/Landing/Signup/Signup'
import TestMe from './components/Landing/TestMe/TestMe';

export default (
 <div id="route-wrapper">
  <Switch>
   <Route exact path="/" component={Landing}/>
   <Route path="/sketchpad" component={Sketchpad}/>
   <Route path="/login" component={Login}/>
   <Route path="/signup" component={Signup}/>
   <Route path="/test" component={TestMe}/>
  </Switch>
 </div>
)

