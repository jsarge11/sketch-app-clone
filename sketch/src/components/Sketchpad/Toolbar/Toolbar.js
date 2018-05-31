import React, {Component} from 'react';
import './toolbar.css';
import axios from 'axios'
import { connect } from 'react-redux'
import { logOut } from '../../../ducks/usersReducer'

class Toolbar extends Component {
    constructor() {
      super();

    }
    componentDidUpdate() {
      if (this.props.menuOn) {
        document.getElementById("too-dropdown").style.display = "block";
      }
      else {
        document.getElementById("too-dropdown").style.display = "none";
      }
    }
    logOut() {
      axios.get('/user/logout').then(() => { 
        this.props.logOut();
      })
    }
    render() {
      return (
        <div id="too-toolbar">
          <div id="stoppingPropagation" onClick={(e)=>e.stopPropagation()}>
            <div id="too-insert" onClick={()=>this.props.changeMenu()}>	+ Insert </div>
          </div>
            <div id="too-dropdown"> 
              <ul id="too-drop-menu">
                <li onClick={()=>this.props.addShape("50%")}>Circle</li>
                <li onClick={()=>this.props.addShape("0%")}>Square</li>
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
