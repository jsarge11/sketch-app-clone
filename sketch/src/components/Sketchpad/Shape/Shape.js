import React, { Component } from 'react';
import Handle from './Handle'
import { addSelected, updateSizeOnSelected, updateSelected, addToChanged } from '../../../ducks/shapesReducer'
import { connect } from 'react-redux'


class Shape extends Component {


    state = {
      id: this.props.item.id,
      top: this.props.item.top,
      left: this.props.item.left,
      height: this.props.item.height,
      width: this.props.item.width,
      borderRadius: this.props.item.borderRadius,
      color: this.props.item.color,
      className: this.props.item.className,
      backgroundColor: this.props.item.backgroundColor,
      transform: this.props.item.transform,
      opacity: this.props.item.opacity,
      border: this.props.item.border,
      filter: this.props.item.filter,
      zIndex: this.props.item.zIndex,
      boxShadow: this.props.item.boxShadow,
      type: this.props.item.type,
      text: this.props.item.text,
      changeText: false,
      rightClicked: false
    }
    
  
  componentDidMount(){ 
    this.dragImg = new Image(this.state.top, this.state.left);
    this.dragImg.src = "http://jaysargent.sargentassociates.com/assets/small.png";
  } 
  
  startDrag = (e) => {
    e.stopPropagation();
    this.setState({ 
      clickedX: e.pageX, 
      clickedY: e.pageY,
      }, () => {
        this.setState({ xDiff: this.state.left * (this.props.zoom / 100) - this.state.clickedX, 
        yDiff: this.state.top * (this.props.zoom / 100) - this.state.clickedY})
      })
    e.dataTransfer.setDragImage(this.dragImg, this.state.top, this.state.left);
  }
  
  endDrag = (e) => {
    e.preventDefault();
  }

    dragDiv = (e) => {
    e.stopPropagation();
    if (e.pageX && e.pageY) {
      this.setState({ 
        top: (e.pageY + this.state.yDiff) / (this.props.zoom / 100),
        left: (e.pageX + this.state.xDiff) / (this.props.zoom / 100)
      })
    }
  }

  onTopLeftMoved = (coordinates) => {
    this.onTopHandleMoved(coordinates);
    this.onLeftHandleMoved(coordinates);
  }
  onTopRightMoved = (coordinates) => {
    this.onTopHandleMoved(coordinates);
    this.onRightHandleMoved(coordinates);
  }
  onBottomRightMoved = (coordinates) => {
    this.onRightHandleMoved(coordinates);
    this.onBottomHandleMoved(coordinates);                    
  }
  onBottomLeftMoved = (coordinates) => {
    this.onBottomHandleMoved(coordinates);
    this.onLeftHandleMoved(coordinates);
  }

  onLeftHandleMoved = ({x}) => {
    let newX = x / (this.props.zoom / 100)
    this.setState(prevState => ({
      left: newX - this.props.left,
      width: (prevState.width + (prevState.left - newX) + this.props.left),
    }));
  }

  onRightHandleMoved = ({x}) => {
    let newX = x / (this.props.zoom / 100)
    this.setState(prevState => ({
      width: (newX - prevState.left - this.props.left),
    }));
  }

  onTopHandleMoved = ({y}) => {
    let newY = y / (this.props.zoom / 100)
    this.setState(prevState => ({
      top: newY - this.props.top,
      height: (prevState.height + (prevState.top - newY) + this.props.top),
    }));
  }

  onBottomHandleMoved = ({y}) => {
    let newY = y / (this.props.zoom / 100)
    this.setState(prevState => ({
      height: newY - prevState.top - this.props.top,
    }));
  }

  updateProps = () => {
    var updatedSize = Object.assign({}, this.props.shapes.selected, {top: this.state.top, left: this.state.left})
    this.props.updateSizeOnSelected(updatedSize);
    this.props.addToChanged();
    this.props.updateSelected()
   }

   updateText(){
    this.setState({
      changeText: !this.state.changeText
    })
    var textValue = document.getElementById('newText').value
    this.props.updateText(textValue)

   }
   

  render() {
    const { top, left, width, height } = this.state;
    
    if (this.props.item.type === 'circle' || this.props.item.type === 'square'){
      var styles = {
        backgroundColor: this.props.item.backgroundColor,
        borderRadius: this.props.item.borderRadius,
        position: 'absolute',
        cursor: "all-scroll",
        top: top,
        left: left,
        width: width,
        height: height,
        border: this.props.item.border,
        boxShadow: this.props.item.boxShadow,
        opacity: this.props.item.opacity,
        transform: this.props.item.transform,
        filter: this.props.item.filter,
        zIndex: this.props.item.zIndex
      };
    } else {
      var styles = {
        backgroundColor: this.props.item.backgroundColor,
        position: 'absolute',
        top: top,
        left: left,
        width: width,
        height: height,
        zIndex: this.props.item.zIndex,
        color: this.props.item.color,
        fontSize: this.props.item.fontSize,
        fontWeight: this.props.item.fontWeight,
        letterSpacing: this.props.item.letterSpacing,
        lineHeight: this.props.item.lineHeight,
        fontFamily: this.props.item.fontFamily,
        textAlign: this.props.item.textAlign,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        overflowWrap: 'break-word'
      }
    }

    const transparentStyles = {
      position: "absolute",
      height: height,
      width: width,
      top: top,
      left: left,
      transform: this.props.item.transform,
      pointerEvents: "none",
    }
    // onClick = {(e) => this.copyCssCode(e, {height: this.props.shapes.selected.height + "px", width: this.props.shapes.selected.width + "px", top: this.props.shapes.selected.top, left: this.props.shapes.selected.left, zIndex: this.props.shapes.selected.zIndex, backgroundColor: this.props.shapes.selected.backgroundColor, borderRadius: this.props.shapes.selected.borderRadius[this.props.shapes.selected.borderRadius.length - 1] === '%' ? this.props.shapes.selected.borderRadius : this.props.shapes.selected.borderRadius + "px", border: this.props.shapes.selected.border, boxShadow: this.props.shapes.selected.boxShadow, opacity: this.props.shapes.selected.opacity, transform: this.props.shapes.selected.transform, filter: this.props.shapes.selected.filter})}
    
    var circleOrSquare = this.props.item.type === 'circle' || this.props.item.type === 'square' ? 
    <div>
      <div className={this.props.item.className} 
           style={styles} 
           draggable={true} 
           droppable="true" 
           onDrag={this.dragDiv} 
           onDragStart={this.startDrag} 
           onDragEnd={this.updateProps} 
           onClick={()=>this.props.addSelected(this.props.item)}></div>

      <div top={top} left={left} className={this.props.item.className} style ={this.props.item.id === this.props.shapes.selected.id ? transparentStyles : {display: 'none'}}>
        <Handle shapeState={this.state}pointer="ns-resize" top={-5} left={-5 + width / 2} onDrag={this.onTopHandleMoved} />
        <Handle shapeState={this.state}pointer="ns-resize" top={-10 + height} left={-5+width/2} onDrag={this.onBottomHandleMoved} />
        <Handle shapeState={this.state}pointer="ew-resize" top={-12 + height / 2} left={-5+width} onDrag={this.onRightHandleMoved} />
        <Handle shapeState={this.state}pointer="ew-resize" top={-20 + height / 2} left={-5} onDrag={this.onLeftHandleMoved} />
        <Handle shapeState={this.state}pointer="nw-resize" top={-36} left={-5} onDrag={this.onTopLeftMoved} />
        <Handle shapeState={this.state}pointer="ne-resize" top={-44} left={-5 + width} onDrag={this.onTopRightMoved} />
        <Handle shapeState={this.state}pointer="se-resize" top={-52 + height} left={-5 + width} onDrag={this.onBottomRightMoved} />
        <Handle shapeState={this.state}pointer="sw-resize" top={-60 + height} left={-5} onDrag={this.onBottomLeftMoved} />
      </div>
    </div> 

 : 
 <div>
<div className={this.props.item.className} style={styles} draggable={true} droppable="true" onDrag={this.dragDiv} onDragStart={this.startDrag} onDragEnd={this.updateProps} onClick={(e)=>this.props.addSelected(this.props.item)}>
  {this.state.changeText === true ? <textarea id = "newText" onKeyPress = {(e) => {if(e.key === 'Enter'){this.updateText()}}} defaultValue = {this.props.item.text} style = {{border: 'none', wordWrap: 'inherit', height: '100%', width: '100%', color: styles.color, fontSize: styles.fontSize, fontFamily: styles.fontFamily, fontWeight: styles.fontWeight, letterSpacing: styles.letterSpacing, lineHeight: styles.lineHeight, textAlign: styles.textAlign}}/> : <p onDoubleClick = {() => this.setState({changeText: true})} id = "textbox" style = {{color: styles.color, fontSize: styles.fontSize, fontFamily: styles.fontFamily, fontWeight: styles.fontWeight, letterSpacing: styles.letterSpacing, wordWrap: 'inherit', lineHeight: styles.lineHeight, textAlign: styles.textAlign}}>{this.props.item.text}</p> }  
 </div>
 <div top={top} left={left} className={this.props.item.className} style ={this.props.item.id === this.props.shapes.selected.id ? transparentStyles : {display: 'none'}}>
   <Handle shapeState={this.state}pointer="ns-resize" top={-5} left={-5 + width / 2} onDrag={this.onTopHandleMoved} />
   <Handle shapeState={this.state}pointer="ns-resize" top={-10 + height} left={-5+width/2} onDrag={this.onBottomHandleMoved} />
   <Handle shapeState={this.state}pointer="ew-resize" top={-12 + height / 2} left={-5+width} onDrag={this.onRightHandleMoved} />
   <Handle shapeState={this.state}pointer="ew-resize" top={-20 + height / 2} left={-5} onDrag={this.onLeftHandleMoved} />
   <Handle shapeState={this.state}pointer="nw-resize" top={-36} left={-5} onDrag={this.onTopLeftMoved} />
   <Handle shapeState={this.state}pointer="ne-resize" top={-44} left={-5 + width} onDrag={this.onTopRightMoved} />
   <Handle shapeState={this.state}pointer="se-resize" top={-52 + height} left={-5 + width} onDrag={this.onBottomRightMoved} />
   <Handle shapeState={this.state}pointer="sw-resize" top={-60 + height} left={-5} onDrag={this.onBottomLeftMoved} />
 </div>
 </div>
 
    return (
      <div>
        <div  className={this.props.item.className} style={styles} draggable={true} droppable="true" onDrag={this.dragDiv} onDragStart={this.startDrag} onDragEnd={this.updateProps} onClick={()=>this.props.addSelected(this.props.item)}></div>
        <div top={top} left={left} className={this.props.item.className}  style ={this.props.item.id === this.props.shapes.selected.id ? transparentStyles : {display: 'none'}}>
          <Handle shapeState={this.state}pointer="ns-resize" top={-5} left={-5 + width / 2} onDrag={this.onTopHandleMoved} />
          <Handle shapeState={this.state}pointer="ns-resize" top={-10 + height} left={-5+width/2} onDrag={this.onBottomHandleMoved} />
          <Handle shapeState={this.state}pointer="ew-resize" top={-12 + height / 2} left={-5+width} onDrag={this.onRightHandleMoved} />
          <Handle shapeState={this.state}pointer="ew-resize" top={-20 + height / 2} left={-5} onDrag={this.onLeftHandleMoved} />
          <Handle shapeState={this.state}pointer="nw-resize" top={-36} left={-5} onDrag={this.onTopLeftMoved} />
          <Handle shapeState={this.state}pointer="ne-resize" top={-44} left={-5 + width} onDrag={this.onTopRightMoved} />
          <Handle shapeState={this.state}pointer="se-resize" top={-52 + height} left={-5 + width} onDrag={this.onBottomRightMoved} />
          <Handle shapeState={this.state}pointer="sw-resize" top={-60 + height} left={-5} onDrag={this.onBottomLeftMoved} />
        </div>
        {circleOrSquare}
      </div>
    );
  }
}
function mapStateToProps(state) {
    return {
      shapes: state.shapes
    }
}
export default connect(mapStateToProps, { addToChanged, addSelected, updateSizeOnSelected, updateSelected })(Shape)