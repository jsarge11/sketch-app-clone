import React, { Component } from 'react';
import './sketchpad.css';
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Attributes from './Attributes/Attributes'
import Toolbar from './Toolbar/Toolbar'
import Projects from './Projects/Projects'
import Shape from './Shape/Shape'
// import shapes from './Functions/shapes'

class Sketchpad extends Component {
  constructor() {
    super();
  
    this.state = {
     shapes: [],
     resize_bottom: false,
     resize_top: false,
     resize_left: false,
     resize_right: false,
     mouseX: 0,
     mouseY: 0
    }
   }
   addShape(color) {
    this.setState({ shapes: [...this.state.shapes, color]})
   }
   trackMouse(e) {
    this.setState({ mouseX: e.pageX, mouseY: e.pageY})
   }
   
   render() {
    if (!this.props.user.id) {
      return <Redirect push to="/" />
    }

    let { resize_bottom, resize_top, resize_left, resize_right } = this.state;
    let shapesArr = this.state.shapes.map((info, i) => {
     return (
      <div key={i}>
       <Shape color={info} 
              className={`shape_${i}`} 
              borderRadius="50%"
              mouseX={this.state.mouseX}
              mouseY={this.state.mouseY}/>
      </div>
     )
    })
  
    return (
     <div className="ske-wrapper" onMouseMove={(e)=>this.trackMouse(e)}>

        <Toolbar />
         <div id="ske-lower-area">
         <Projects />
         <div id="ske-sketchpad">
          <button onClick={()=>this.addShape("green")}> Add Green Shape </button>
          <button onClick={()=>this.addShape("blue")}> Add Blue Shape </button>
          <button onClick={()=>this.addShape("black")}> Add Black Shape </button>
          <button onClick={()=>this.addShape("grey")}> Add Grey Shape </button>
          <button onClick={()=>this.addShape("rebeccapurple")}> Add Purple Shape </button>
          {shapesArr}
         
         </div>
         <Attributes />
        </div>
        
        
      </div>
    )
   }
}
function mapStateToProps(state) {
  let { user } = state.users;
  return {
    user,
  }
}

export default connect(mapStateToProps)(Sketchpad);
