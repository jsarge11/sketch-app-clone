import React, {Component} from 'react';
import './toolbar.css';
import axios from 'axios'
import { connect } from 'react-redux'
import { logOut } from '../../../ducks/usersReducer'

class Toolbar extends Component {

    logOut() {
      axios.get('/user/logout').then(() => { 
        this.props.logOut();
      })
    }
    render() {
      return (
        <div id="too-toolbar">
          <div id="too-insert">	+ Insert </div>
          <div id="too-dropdown"> 
            <ul id="too-drop-menu">
              <li>Circle</li>
              <li>Square</li>
              <li>Text</li>
              <li>Line</li>
            </ul>
          </div>
          <p id="too-logout" onClick={()=>this.logOut()}>Logout</p>
        </div>
      );
    }
}

export default connect(null, {logOut})(Toolbar);
