import React, {Component} from 'react';
import './toolbar.css';
import axios from 'axios'
import { connect } from 'react-redux'
import { logOut } from '../../../ducks/usersReducer'

class Toolbar extends Component {
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

      let { sketchpad } = this.props;
      return (
        <div id="too-toolbar">
          <div id="stoppingPropagation" onClick={(e)=>e.stopPropagation()}>
            <div id="too-insert" onClick={()=>this.props.changeMenu()}>	+ Insert </div>
          </div>
            <div id="too-dropdown"> 
              <ul id="too-drop-menu">
                {console.log(sketchpad)}
                <li onClick={()=>this.props.addShapeToArray('circle', sketchpad)}>Circle</li>
                <li onClick={()=>this.props.addShapeToArray('square' , sketchpad)}>Square</li>
                {/* <li onClick={()=>this.props.addShapeToArray({eid: 3, type: "input", backgroundColor: 'white'})}>Text</li> */}
                {/* <li>Line</li> */}
              </ul>
            </div>
          <p id="too-logout" onClick={()=>this.logOut()}>Logout</p>
        </div>
      );
    }
}
function mapStateToProps(state){
  console.log(state);
  console.log(state.projects);
  return{
    sketchpad: state.projects.selectedProject
  }
}

export default connect(mapStateToProps, {logOut })(Toolbar);
