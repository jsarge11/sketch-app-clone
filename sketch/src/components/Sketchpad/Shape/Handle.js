import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateSizeOnSelected, addToChanged, updateSelected } from '../../../ducks/shapesReducer'

class Handle extends Component {

 handleDragEvent = (event) => {
   event.stopPropagation();
   if(event.pageX && event.pageY && this.props.onDrag) {
     this.props.onDrag({
       x: event.pageX,
       y: event.pageY,
     });
   }
 }
 updateProps = () => {
  var updatedSize = Object.assign({}, this.props.shapes.selected, {top: this.props.shapeState.top, left: this.props.shapeState.left, height: this.props.shapeState.height, width: this.props.shapeState.width})
  this.props.updateSizeOnSelected(updatedSize);
  this.props.addToChanged();
  this.props.updateSelected();
 }

 render() {
   const handleSize = 6;
   const { top, left, pointer } = this.props;
   const handleStyle = {
     backgroundColor: 'white',
     border: "1px solid black",
     position: 'relative',
     top: top,
     left: left,
     height: handleSize,
     width: handleSize,
     cursor: pointer,
     pointerEvents: "auto",
     zIndex: 999,
   };
   return (
     <div 
       draggable={true} 
       style={handleStyle}
       onDrag={this.handleDragEvent}
       onDragEnd={this.updateProps}
       >
     </div>
   );
 }
}
function mapStateToProps(state) {
  return {
    shapes: state.shapes
  }
}
export default connect(mapStateToProps, { addToChanged, updateSizeOnSelected, updateSelected })(Handle)