import React, { Component } from 'react';
import './sketchpad.css';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { addShapeToArray, updateSelected, deleteElement } from '../../ducks/shapesReducer'

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

   ///KEY LOGGER
componentDidMount(){
  document.body.addEventListener('keypress', (event)=>{
    let { selectedProject }= this.props;
    let { selected } = this.props;
    if(selected){
      if(event.key === "D" && event.shiftKey === true){
        this.props.deleteElement(selected.id, selectedProject)
      }
    }
  })
}
/////KEY LOGGER ^^^^^^^^^^

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
    
     if (!this.props.user.id) {
       return <Redirect push to="/"/>
      }
      
      let { shapes } = this.props;
      var shapesArr = shapes.shapes.map((item, i) => {
        var itemObjWithType = {
          className: `shape_${item.id}`,
          id: item.id,
          borderRadius: item.body.borderRadius,
          backgroundColor: item.body.backgroundColor,
          height: item.body.height,
          width: item.body.width,
          top: item.body.top,
          left: item.body.left,
          type: item.e_type,
          border: item.body.border,
          borderColor: item.body.borderColor,
          boxShadow: item.body.boxShadow,
          opacity: item.body.opacity,
          transform: item.body.transform,
          filter: item.body.filter,
          zIndex: item.body.zIndex

        }
        return (
         <div key={i}>
          <Shape item = {itemObjWithType} />   
         </div>
        )
      })
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
    selectedProject: state.projects.selectedProject,
    selected: state.shapes.selected,
    user,
    shapes
  }
}

export default connect(mapStateToProps, { addShapeToArray, updateSelected, deleteElement })(Sketchpad);
