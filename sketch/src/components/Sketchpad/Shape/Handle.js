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
   const { top, left, pointer } = this.props;
   const handleStyle = {
     backgroundColor: 'white',
     border: "1px solid black",
     position: 'absolute',
     top: top - handleSize/2,
     left: left - handleSize/2,
     height: handleSize,
     width: handleSize,
     cursor: pointer,
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