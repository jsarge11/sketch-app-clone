import React, {Component} from 'react';
import './attributes.css';
import {connect} from 'react-redux';
import BasicShapeAtt from './BasicShapeAtt/BasicShapeAtt';
import TriangleAndStarAtt from './TriangleAndStarAtt/TriangleAndStarAtt';
import {addFillToSelected, deleteFillFromSelected, deleteBorderFromSelected, updateFillOnSelected} from '../../../ducks/shapesReducer'

class Attributes extends Component {
  constructor(){
    super()
    this.state ={

    }
    this.addFillOnSelected = this.addFillOnSelected.bind(this);
    this.deleteFillOnSelected = this.deleteFillOnSelected.bind(this);
    this.addBorderOnSelected = this.addBorderOnSelected.bind(this);
    this.deleteBorderOnSelected = this.deleteBorderOnSelected.bind(this);
    this.updateFillOnSelected = this.updateFillOnSelected.bind(this);
  }


  addFillOnSelected(){
    var combinedWithBC = Object.assign({}, this.props.shapes.selected, {backgroundColor: '#939393'})
    this.props.addFillToSelected(combinedWithBC)
  }

  deleteFillOnSelected(){
    var withoutBC = Object.assign({}, this.props.shapes.selected, {backgroundColor: undefined})
    this.props.deleteFillFromSelected(withoutBC)
  }

  updateFillOnSelected(color){
    var updateBC = Object.assign({}, this.props.shapes.selected, {backgroundColor: color})
    this.props.updateFillOnSelected(updateBC)
  }

  addBorderOnSelected(){
    
  }

  deleteBorderOnSelected(){
    var withoutBorder = Object.assign({}, this.props.shapes.selected, {border: undefined})
    this.props.deleteBorderFromSelected(withoutBorder)
  }

  render(){
    var typeSelected = this.props.shapes.selected.type === 'square' || this.props.shapes.selected.type === 'circle' ? 
    <BasicShapeAtt addFill = {this.addFillOnSelected} deleteFill = {this.deleteFillOnSelected} updateFill = {this.updateFillOnSelected} addBorder = {this.addBorderOnSelected} deleteBorder = {this.deleteBorderOnSelected}/> : <TriangleAndStarAtt />
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
export default connect(mapStateToProps, {addFillToSelected, deleteFillFromSelected, deleteBorderFromSelected, updateFillOnSelected})(Attributes);
