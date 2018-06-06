import React, { Component } from 'react';
import './sketchpad.css';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { addShapeToArray, updateSelected, updateTextOnSelected } from '../../ducks/shapesReducer'

import Attributes from './Attributes/Attributes'
import Toolbar from './Toolbar/Toolbar'
import Projects from './Projects/Projects'
import Shape from './Shape/Shape'
// import shapes from './Functions/shapes'

class Sketchpad extends Component {
  constructor() {
    super();
  
    this.state = {
     menuOn: false,
     zoom: 100,
     top: 20,
     left: 20
    }

    this.changeMenu = this.changeMenu.bind(this);
    this.addShapeToArray = this.addShapeToArray.bind(this);
    this.updateText = this.updateText.bind(this);
    this.dragEquation = this.dragEquation.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
   }

   componentDidMount(){ 
    this.dragImg = new Image(this.state.top, this.state.left);
    this.dragImg.src = "http://jaysargent.sargentassociates.com/assets/small.png"; 
  }

   startDrag = (e) => {
    this.setState({ 
      clickedX: e.pageX, 
      clickedY: e.pageY,
      }, () => {
        this.setState({ 
          xDiff: this.state.left * (this.dragEquation(this.state.zoom)) - this.state.clickedX, 
          yDiff: this.state.top * (this.dragEquation(this.state.zoom)) - this.state.clickedY})
      })
    e.dataTransfer.setDragImage(this.dragImg, this.state.top, this.state.left);
  }
  
    dragDiv = (e) => {
    let { xDiff, yDiff, boundTop, boundLeft, boundHeight, boundWidth } = this.state;
    if (e.pageX && e.pageY) {
          this.setState({ 
            top: (e.pageY + this.state.yDiff) / (this.dragEquation(this.state.zoom)),
            left: (e.pageX + this.state.xDiff) / (this.dragEquation(this.state.zoom))
        })     
      }
    }


   addShapeToArray(attributes, sketchpad) {
     this.props.addShapeToArray(attributes, sketchpad)
   }

    changeMenu() {
      this.setState({ menuOn: !this.state.menuOn})
    }
    menuOff() {
    this.setState({ menuOn: false })
    }

    updateText(newText){
      var updateText = Object.assign({}, this.props.shapes.selected, {text: newText});
      this.props.updateTextOnSelected(updateText);
      this.props.updateSelected()
    }

    zoomOut(value) {
      this.setState({ zoom: this.state.zoom - value})
    }
    zoomIn(value) {
      this.setState({ zoom: this.state.zoom + value})
    }
  
    dragEquation = (e) => {
      // convert from percent
      let x = e / 100;
      // x^2 + 0.1x - .1
      let y = Math.pow(x, 2);
      y += y * .1;
      y -= .1;
      return y;
    }
   render() {
     
     if (!this.props.user.id) {
       return <Redirect push to="/"/>
      }
      
      let { shapes } = this.props;
      var shapesArr = shapes.shapes.map((item, i) => {
        if (item.e_type === 'circle' || item.e_type === 'square'){
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
        } else if (item.e_type === 'text'){
          var itemObjWithType = {
            className: `shape_${item.id}`,
            id: item.id,
            height: item.body.height,
            width: item.body.width,
            top: item.body.top,
            left: item.body.left,
            backgroundColor: item.body.backgroundColor,
            zIndex: item.body.zIndex,
            type: item.e_type,
            color: item.body.color,
            fontSize: item.body.fontSize,
            fontFamily: item.body.fontFamily,
            fontWeight: item.body.fontWeight,
            letterSpacing: item.body.letterSpacing,
            lineHeight: item.body.lineHeight,
            textAlign: item.body.textAlign,
            text: item.body.text
          }
        }

        return (
         <div key={i}>
          <Shape 
          item = {itemObjWithType} 
          updateText = {this.updateText}
          zoom = {this.state.zoom}
          dragEquation = {this.dragEquation}
          top = {this.state.top}
          left = {this.state.left} />   
         </div>
        )
      })
      const outerStyle = {
        position: "absolute",
        zoom: `${this.state.zoom}%`,
        top: this.state.top,
        left: this.state.left,
      }
    return (
       <div className="ske-wrapper" onClick={() => this.menuOff()}>
          <div 
            id="ske-outer-bound" 
            style={outerStyle} 
            draggable={true} 
            droppable="true" 
            onDrag={this.dragDiv} 
            onDragStart={this.startDrag}
          > 
          hello
          {shapesArr}
          </div>
            <Toolbar 
            changeMenu={this.changeMenu} 
            menuOn={this.state.menuOn} 
            addShapeToArray={this.addShapeToArray}
            zoomIn={this.zoomIn}
            zoomOut={this.zoomOut}
            zoom={this.state.zoom}
            />
            
            <div id="ske-lower-area">
                <Projects />
              <div id="ske-sketchpad">
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

export default connect(mapStateToProps, { addShapeToArray, updateSelected, updateTextOnSelected })(Sketchpad);
