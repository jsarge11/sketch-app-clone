import React, { Component } from 'react';
import './sketchpad.css';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { saveChanged, resetChanged, addShapeToArray, updateSelected, updateTextOnSelected, deleteElement } from '../../ducks/shapesReducer';


import Attributes from './Attributes/Attributes'
import Toolbar from './Toolbar/Toolbar'
import Projects from './Projects/Projects'
import Shape from './Shape/Shape'
import dragEquation from '../../fns/dragEquation'

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
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
   }

   ///KEY LOGGER
componentDidMount(){
  document.body.addEventListener('keypress', (event)=>{
    let { selected, shapes, selectedProject } = this.props;
    if(selected){
      if(event.key === "D" && event.shiftKey === true){
        if(this.props.changed > 0 ){
          shapes.shapes.map(e => {
            this.props.saveChanged(e.id, selectedProject, e.body)
          })
          this.props.deleteElement(selected.id, selectedProject);
          this.props.resetChanged();
        }else{
          this.props.deleteElement(selected.id, selectedProject)
        }
      }
    }
  })

  this.dragImg = new Image(this.state.top, this.state.left);
  this.dragImg.src = "http://jaysargent.sargentassociates.com/assets/small.png"; 
}
componentDidUpdate(){
  setTimeout(() => {
    let { changed, shapes, selectedProject } = this.props;
      if( changed.length > 0 ){
        shapes.shapes.map(e => {
          this.props.saveChanged(e.id, selectedProject, e.body);
        });
        this.props.resetChanged();
      }
      
  }, 2000)
}
componentWillUnmount(){
  let { changed, shapes, selectedProject } = this.props;
      if( changed.length > 0 ){
        shapes.shapes.map(e => {
          this.props.saveChanged(e.id, selectedProject, e.body);
        });
        this.props.resetChanged();
        
      }
}
/////KEY LOGGER ^^^^^^^^^^

   addShapeToArray(attributes, sketchpad) {
     let {changed, selectedProject, shapes} = this.props;
     if( changed.length > 0){
       shapes.shapes.map((e,i) => {
        this.props.saveChanged(e.id, selectedProject, e.body);
       });
       this.props.resetChanged();
       this.props.addShapeToArray(attributes, sketchpad);
     }else{
       this.props.addShapeToArray(attributes, sketchpad);
     }
    // this.setState({ shapes: [...this.state.shapes, attributes]})
   }
   startDrag = (e) => {
    this.setState({ 
      clickedX: e.pageX, 
      clickedY: e.pageY,
      }, () => {
        this.setState({ 
          xDiff: this.state.left * (dragEquation(this.state.zoom)) - this.state.clickedX, 
          yDiff: this.state.top * (dragEquation(this.state.zoom)) - this.state.clickedY})
      })
    e.dataTransfer.setDragImage(this.dragImg, this.state.top, this.state.left);
  }
  dragDiv = (e) => {
    if (e.pageX && e.pageY) {
          this.setState({ 
            top: (e.pageY + this.state.yDiff) / (dragEquation(this.state.zoom)),
            left: (e.pageX + this.state.xDiff) / (dragEquation(this.state.zoom))
        })     
      }
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
         <div key={item.id}>
          <Shape 
            item = {itemObjWithType} 
            updateText = {this.updateText}
            zoom = {this.state.zoom}
            dragEquation = {dragEquation}
            top = {this.state.top}
            left = {this.state.left} 
          />   
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
          { this.props.selectedProject === null ? <div></div> :shapesArr}
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
    selectedProject: state.projects.selectedProject,
    selected: state.shapes.selected,
    changed: state.shapes.changed,
    user,
    shapes
  }
}

export default connect(mapStateToProps, {  addShapeToArray, updateSelected, updateTextOnSelected, deleteElement, resetChanged, saveChanged })(Sketchpad);
