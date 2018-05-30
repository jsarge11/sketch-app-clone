import React, { Component } from 'react';
import './sketchpad.css';
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Attributes from './Attributes/Attributes'
import Toolbar from './Toolbar/Toolbar'
import Projects from './Projects/Projects'
// import shapes from './Functions/shapes'

class Sketchpad extends Component {

  render() {
    if (!this.props.user.id) {
      return <Redirect push to="/" />
    }
    return (
      <div>
        <Toolbar />
         <div id="ske-lower-area">
         <Projects />
         <div id="ske-sketchpad">Sketchpad</div>
         <Attributes />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  let { user } = state.users;
  return {
    user,
  }
}

export default connect(mapStateToProps)(Sketchpad);
