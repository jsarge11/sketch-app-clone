import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from './components/Landing/Landing'
import Sketchpad from './components/Sketchpad/Sketchpad'

export default (
 <div>
  <Switch>
   <Route exact path="/" component={Landing}/>
   <Route path="/sketchpad" component={Sketchpad}/>
  </Switch>
 </div>
)

