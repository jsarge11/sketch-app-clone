import React, { Component } from 'react'

export default class Handle extends Component {

 handleDragEvent = (event) => {
   if(event.pageX && event.pageY && this.props.onDrag) {
     this.props.onDrag({
       x: event.pageX,
       y: event.pageY,
     });
   }
 }

 render() {
   const handleSize = 6;
   const { top, left, pointer, transform } = this.props;
   const handleStyle = {
     backgroundColor: 'white',
     border: "1px solid black",
     position: 'relative',
     top: top,
     left: left,
     height: handleSize,
     width: handleSize,
     cursor: pointer,
     pointerEvents: "auto"
   };
   return (
     <div 
       draggable={true} 
       style={handleStyle}
       onDrag={this.handleDragEvent}
       >
     </div>
   );
 }
}