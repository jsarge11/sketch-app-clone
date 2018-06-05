import React, { Component } from 'react';
import Handle from './Handle'
import { addSelected, updateSizeOnSelected, updateSelected } from '../../../ducks/shapesReducer'
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
      changeText: false
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
        this.setState({ xDiff: this.state.left - this.state.clickedX, yDiff: this.state.top - this.state.clickedY})
      })
    e.dataTransfer.setDragImage(this.dragImg, this.state.top, this.state.left);
  }
  
  endDrag = (e) => {
    e.preventDefault();
  }

    dragDiv = (e) => {
    if (e.pageX && e.pageY) {
      this.setState({ 
        top: e.pageY + this.state.yDiff,
        left: e.pageX + this.state.xDiff
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
    this.setState(prevState => ({
      left: x,
      width: prevState.width + (prevState.left - x),
    }));
  }

  onRightHandleMoved = ({x}) => {
    this.setState(prevState => ({
      width: x - prevState.left,
    }));
  }

  onTopHandleMoved = ({y}) => {
    this.setState(prevState => ({
      top: y,
      height: prevState.height + (prevState.top - y),
    }));
  }

  onBottomHandleMoved = ({y}) => {
    this.setState(prevState => ({
      height: y - prevState.top,
    }));
  }
  updateProps = () => {
    var updatedSize = Object.assign({}, this.props.shapes.selected, {top: this.state.top, left: this.state.left})
    this.props.updateSizeOnSelected(updatedSize)
   }

   updateText(){
     console.log('here')
    var textValue = document.getElementById('newText').value
    this.props.updateText(textValue)
    this.setState = ({
      changeText: false
    })
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
        alignItems: 'center'
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

    var circleOrSquare = this.props.item.type === 'circle' || this.props.item.type === 'square' ?  
    <div>
      <div className={this.props.item.className} style={styles} draggable={true} droppable="true" onDrag={this.dragDiv} onDragStart={this.startDrag} onDragEnd={this.updateProps} onClick={()=>this.props.addSelected(this.props.item)}></div>
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
 <div className={this.props.item.className} style={styles} draggable={true} droppable="true" onDrag={this.dragDiv} onDragStart={this.startDrag} onDragEnd={this.updateProps} onClick={()=>this.props.addSelected(this.props.item)}>
  {this.state.changeText === true ? <input id = "newText" onKeyPress = {(e) => {if(e.key === 'Enter'){this.updateText()}}} placeholder = {this.state.text} style = {{height: '100%', width: '100%', color: styles.color, fontSize: styles.fontSize, fontFamily: styles.fontFamily, fontWeight: styles.fontWeight, letterSpacing: styles.letterSpacing, lineHeight: styles.lineHeight, textAlign: styles.textAlign}}/> : <p onDoubleClick = {() => this.setState({changeText: true})} id = "textbox" style = {{color: styles.color, fontSize: styles.fontSize, fontFamily: styles.fontFamily, fontWeight: styles.fontWeight, letterSpacing: styles.letterSpacing, lineHeight: styles.lineHeight, textAlign: styles.textAlign}}>{this.props.item.text}</p> }  
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
export default connect(mapStateToProps, { addSelected, updateSizeOnSelected, updateSelected })(Shape)