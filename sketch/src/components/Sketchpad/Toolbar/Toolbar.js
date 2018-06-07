import React, {Component} from 'react';
import './toolbar.css';
import axios from 'axios'
import { connect } from 'react-redux'
import { logOut } from '../../../ducks/usersReducer';
import { resetChanged, saveChanged} from '../../../ducks/shapesReducer';
import { resetSelected } from '../../../ducks/projectsReducer';
import magnifying from '../../../assets/magnifying.png'

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
      let { changed, shapes, selectedProject } = this.props;
      // axios.get('/user/logout').then(() => { 
      //   this.props.resetSelected();
      //   this.props.logOut();
      // })
      
      if( changed.length > 0 ){
        shapes.map(e => {
          this.props.saveChanged(e.id, selectedProject, e.body);
        });
        this.props.resetChanged();
        this.props.resetSelected();
        axios.get('/user/logout').then(() => { 
          this.props.logOut();
        });
      }else{
        axios.get('/user/logout').then(() => { 
          this.props.resetSelected();
          this.props.logOut();

        })
      }
      
    }
    render() {

      let { sketchpad } = this.props;
      return (
        <div id="too-toolbar">
          <div id="stopping-propagation" onClick={(e)=>e.stopPropagation()}>
            <div id="too-insert" onClick={()=>this.props.changeMenu()}>	+ Insert </div>
              <span id="too-zoom">
                <button onClick={()=>this.props.zoomIn(10)}>+</button>
                  <img src={magnifying} height="25px"/>
                <button onClick={()=>this.props.zoomOut(10)}>-</button>
              </span>
              <span id="too-number">{`${this.props.zoom}%`}</span>
          </div>
            <div id="too-dropdown"> 
              <ul id="too-drop-menu">
                <li onClick={()=>this.props.addShapeToArray('circle', sketchpad)}>Circle</li>
                <li onClick={()=>this.props.addShapeToArray('square' , sketchpad)}>Square</li>
                <li onClick={()=>this.props.addShapeToArray('text', sketchpad)}>Text</li>
                {/* <li>Line</li> */}
              </ul>
            </div>
          <p id="too-logout" onClick={()=>this.logOut()}>Logout</p>
        </div>
      );
    }
}
function mapStateToProps(state){
  return{
    sketchpad: state.projects.selectedProject,
    shapes: state.shapes.shapes,
    changed: state.shapes.changed
  }
}

export default connect(mapStateToProps, {logOut, resetChanged, saveChanged, resetSelected })(Toolbar);
