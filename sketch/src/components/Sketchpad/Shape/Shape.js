import React, { Component } from 'react';
import Handle from './Handle'

export default class Shape extends Component {

  constructor(props) {
    super(props)
    this.state = {
      top: 110,
      left: 110,
      height: 100,
      width: 100,
      borderRadius: props.borderRadius,
      color: props.color,
      className: props.className,
    }
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
    console.log('here');
    e.preventDefault();
  }

  dragDiv = (e) => {
    let { clickedX, clickedY, top, left } = this.state;

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
    this.onBottomHandleMoved(coordinates);
    this.onRightHandleMoved(coordinates);
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

  render() {
    const { top, left, height, width } = this.state;
    const styles = {
      backgroundColor: 'blue',
      position: 'absolute',
      top,
      left,
      width,
      height,
    };
    
    return (
      <div>
        <div className={"test-class"} style={styles} draggable={true} droppable="true" onDrag={this.dragDiv} onDragStart={this.startDrag}></div>
        <Handle pointer="ns-resize" top={top} left={left+width/2} onDrag={this.onTopHandleMoved} />
        <Handle pointer="ns-resize" top={top+height} left={left+width/2} onDrag={this.onBottomHandleMoved} />
        <Handle pointer="ew-resize" top={top+height/2} left={left+width} onDrag={this.onRightHandleMoved} />
        <Handle pointer="ew-resize" top={top+height/2} left={left} onDrag={this.onLeftHandleMoved} />

        <Handle pointer="nw-resize" top={top} left={left} onDrag={this.onTopLeftMoved} />
        <Handle pointer="ne-resize" top={top} left={left + width} onDrag={this.onTopRightMoved} />
        <Handle pointer="se-resize" top={top+height} left={left + width} onDrag={this.onBottomRightMoved} />
        <Handle pointer="sw-resize" top={top+height} left={left} onDrag={this.onBottomLeftMoved} />
      </div>
    );
  }
}

