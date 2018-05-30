import React, {Component} from 'react';
import './attributes.css';
import {connect} from 'react-redux';
import BasicShapeAtt from './BasicShapeAtt/BasicShapeAtt';
import TriangleAndStarAtt from './TriangleAndStarAtt/TriangleAndStarAtt';

class Attributes extends Component {

  render(){
    var typeSelected = this.props.shapes.selected.type === 'square' || this.props.shapes.selected.type === 'circle' ? 
    <BasicShapeAtt /> : <TriangleAndStarAtt />
   return (
     <div id = "ske-attributes">
       {typeSelected}
     </div>
   )
  }
}

function mapStateToProps(state){
  return {
    shapes: state.shapes
  }
}
export default connect(mapStateToProps)(Attributes);
