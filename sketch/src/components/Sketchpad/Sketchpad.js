import React, { Component } from 'react';
import './sketchpad.css';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { addShapeToArray } from '../../ducks/shapesReducer'

import Attributes from './Attributes/Attributes'
import Toolbar from './Toolbar/Toolbar'
import Projects from './Projects/Projects'
import Shape from './Shape/Shape'
// import shapes from './Functions/shapes'

class Sketchpad extends Component {
  constructor() {
    super();
  
    this.state = {
     resize_bottom: false,
     resize_top: false,
     resize_left: false,
     resize_right: false,
     mouseX: 0,
     mouseY: 0,
     menuOn: false,
    }

    this.changeMenu = this.changeMenu.bind(this);
    this.addShapeToArray = this.addShapeToArray.bind(this);
   }
   addShapeToArray(attributes, sketchpad) {
     this.props.addShapeToArray(attributes, sketchpad)
    // this.setState({ shapes: [...this.state.shapes, attributes]})
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
    console.log(this.props.shapes);
    // console.log(this.props.shapes.selected);
    if (!this.props.user.id) {
      return <Redirect push to="/" />
    }

    let shapesArr = this.props.shapes.shapes.map((attr, i) => {
      // console.log(typeof attr.borderRadius);
      return (
       <div key={i}>
        <Shape className={`shape_${attr.eid}`} 
               borderRadius={attr.borderRadius}
               backgroundColor={attr.backgroundColor}
               height={attr.height}
               width={attr.width}
               top={attr.top}
               left={attr.left}
               attr={attr}/>
       </div>
      )
     })
    
    // console.log(this.props.shapes);
    return (
     <div className="ske-wrapper" onMouseMove={(e)=>this.trackMouse(e)} onClick={() => this.menuOff()}>

        <Toolbar 
        changeMenu={this.changeMenu} 
        menuOn={this.state.menuOn} 
        addShapeToArray={this.addShapeToArray}/>
        
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
  let { shapes } = state;
  return {
    user,
    shapes
  }
}

export default connect(mapStateToProps, { addShapeToArray })(Sketchpad);
