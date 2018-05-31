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
     mouseY: 0,
     menuOn: false,
    }

    this.changeMenu = this.changeMenu.bind(this);
    this.addShape = this.addShape.bind(this);
   }
   addShape(attributes) {
    this.setState({ shapes: [...this.state.shapes, attributes]})
   }
   trackMouse(e) {
    this.setState({ mouseX: e.pageX, mouseY: e.pageY})
   }
   
    changeMenu() {
      this.setState({ menuOn: !this.state.menuOn})
    }
    menuOff() {
    this.setState({ menuOn: false })
    }
   render() {
    if (!this.props.user.id) {
      return <Redirect push to="/" />
    }

    let { resize_bottom, resize_top, resize_left, resize_right } = this.state;
    let shapesArr = this.state.shapes.map((attr, i) => {
     return (
      <div key={i}>
       <Shape className={`shape_${i}`} 
              borderRadius={attr.borderRadius}
              mouseX={this.state.mouseX}
              mouseY={this.state.mouseY}
              backgroundColor={attr.backgroundColor}/>
      </div>
     )
    })
    
    
    return (
     <div className="ske-wrapper" onMouseMove={(e)=>this.trackMouse(e)} onClick={() => this.menuOff()}>

        <Toolbar 
        changeMenu={this.changeMenu} 
        menuOn={this.state.menuOn} 
        addShape={this.addShape}/>
        
         <div id="ske-lower-area">
         <Projects />
         <div id="ske-sketchpad">
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
