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
      backgroundColor: this.props.item.backgroundColor
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
      }, () => {
        this.updatePosition();
      })
    }
  }

  updatePosition = () => {
    var updatedHeight = Object.assign({}, this.props.shapes.selected, {top: this.state.top, left: this.state.left})
    this.props.updateSizeOnSelected(updatedHeight)
  }

  updateSize = () => {
    var updatedSize = Object.assign({}, this.props.shapes.selected, {height: this.state.height, width: this.state.width})
    this.props.updateSizeOnSelected(updatedSize)
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
    }), () => this.updateSize());
  }

  onRightHandleMoved = ({x}) => {
    this.setState(prevState => ({
      width: x - prevState.left,
    }), () => this.updateSize());
  }

  onTopHandleMoved = ({y}) => {
    this.setState(prevState => ({
      top: y,
      height: prevState.height + (prevState.top - y),
    }), () => this.updateSize());
  }

  onBottomHandleMoved = ({y}) => {
    this.setState(prevState => ({
      height: y - prevState.top,
    }), () => this.updateSize());
  }

  render() {
    this.props.updateSelected();
    const { top, left } = this.state;
    const { width, height } = this.props.item;
    
    const styles = {
      backgroundColor: this.props.item.backgroundColor,
      borderRadius: this.props.item.borderRadius,
      position: 'absolute',
      top: top,
      left: left,
      width: this.props.item.width,
      height: this.props.item.height,
      border: this.props.item.border,
      boxShadow: this.props.item.boxShadow,
      opacity: this.props.item.opacity,
      transform: this.props.item.transform,
      filter: this.props.item.filter
    };
    return (
      <div>
        <div className={this.props.item.className} style={styles} draggable={true} droppable="true" onDrag={this.dragDiv} onDragStart={this.startDrag} onClick={()=>this.props.addSelected(this.props.item)}></div>
        <Handle pointer="ns-resize" top={top} left={left+width/2} onDrag={this.onTopHandleMoved} />
        <Handle pointer="ns-resize" top={top+this.props.height} left={left+width/2} onDrag={this.onBottomHandleMoved} />
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
function mapStateToProps(state) {
    return {
      shapes: state.shapes
    }
}
export default connect(mapStateToProps, { addSelected, updateSizeOnSelected, updateSelected })(Shape)