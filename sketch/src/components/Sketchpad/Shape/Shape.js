import React, { Component } from 'react';
import './shape.css';

class Shape extends Component {

  constructor(props) {
    super(props)
    this.state = {
      height: 250,
      width: 250,
      borderRadius: props.borderRadius,
      color: "grey",
      className: props.className,
      originalHeight: 250,
      x: 100,
      y: 100,
      xDiff: 0,
      yDiff: 0,
      clicked: false,
      mouseDown: false
    }
  }
  saveResizeCoordinates(e) {
    this.setState({ clickedX: e.pageX, clickedY: e.pageY })
  }
  saveCoordinates(e) {
    this.setState({ clicked: true, clickedX: e.pageX, clickedY: e.pageY})
    document.getElementsByClassName(this.state.className)[0].id = "selected";
  }
  updatePosition() {
    this.setState({clicked: false})
    let top = document.getElementsByClassName(this.state.className)[0].style.top;
    top = top.substring(0, top.length - 2)
    let left = document.getElementsByClassName(this.state.className)[0].style.left;
    left = left.substring(0, left.length - 2)
    this.setState({x: +left, y: +top, xDiff: 0, yDiff: 0})
    document.getElementsByClassName(this.state.className)[0].id = null;
  }

  resize(direction, e) {
    //stops event bubbling
    e.stopPropagation();
    this.saveResizeCoordinates(e);
    this.setState({ [`resize_${direction}`]: true, mouseDown: true })
  }

  moveMouse(e) {
    // console.log(document.getElementsByClassName(this.state.className)[0].style.bottom);
    if (this.state.clicked) {
      this.setState({ xDiff: this.props.mouseX - this.state.clickedX, yDiff: this.props.mouseY - this.state.clickedY})
    }
  
  }

  render() {
    let top;
    if (document.getElementsByClassName(this.state.className)[0]) {
      top = document.getElementsByClassName(this.state.className)[0].style.top;
    }
    else {
      top = '';
    }
    return (
      
        <div className={this.state.className}
        onMouseMove={e=>this.moveMouse(e)}
        onMouseDown={(e)=>this.saveCoordinates(e)}
        // onMouseUp={()=>this.setState({ resize_bottom: false, resize_top: false, resize_left: false, resize_right: false, clicked: false})} 
        onMouseUp={()=>this.updatePosition()} 

        style={{
          height: this.state.height,
          width: this.state.width,
          position: "absolute",
          cursor: "all-scroll",
          top: this.state.y + this.state.yDiff, 
          left: this.state.x + this.state.xDiff, 
          bottom: this.state.y - this.state.yDiff,
          backgroundColor: this.state.color,
          borderRadius: this.state.borderRadius
          // filter: "blur(4px)"
          }}>        
          
        {/* <div id="top-left" className="resize-btn"></div> */}
        {/* <div id="top-middle" className="resize-btn" onMouseDown={(e)=>this.resize("top", e)} onMouseUp={()=>this.setState({ resize_top: false })}></div> */}
        {/* <div id="top-right" className="resize-btn"></div> */}
        {/* <div id="left-middle" className="resize-btn" onMouseDown={(e)=>this.resize("left", e)} onMouseUp={()=>this.setState({ resize_left: false })}></div> */}
        {/* <div id="right-middle" className="resize-btn" onMouseDown={(e)=>this.resize("right", e)} onMouseUp={()=>this.setState({ resize_right: false })}></div> */}
        {/* <div id="bottom-left" className="resize-btn"></div> */}
        {/* <div id="bottom-middle" className="resize-btn" onMouseDown={(e)=>this.resize("bottom", e)} onMouseUp={()=>this.setState({ resize_bottom: false, mouseDown: false })}></div> */}
        {/* if mouseLeave onMouseUp */}
        {/* <div id="bottom-right" className="resize-btn"></div> */}
        
        </div> 
    );
  }
}

export default Shape;
