import React, {Component} from 'react';
import './attributes.css';
import {connect} from 'react-redux';
import BasicShapeAtt from './BasicShapeAtt/BasicShapeAtt';
import TriangleAndStarAtt from './TriangleAndStarAtt/TriangleAndStarAtt';
import {addFillToSelected} from '../../../ducks/shapesReducer'

class Attributes extends Component {
  constructor(){
    super()
    this.state ={

    }
    this.addFillOnSelected = this.addFillOnSelected.bind(this)
  }


  addFillOnSelected(){
    this.props.addFillToSelected('#939393')
  }

  render(){

    var typeSelected = this.props.shapes.selected.type === 'square' || this.props.shapes.selected.type === 'circle' ? 
    <BasicShapeAtt addFill = {this.addFillOnSelected}/> : <TriangleAndStarAtt />
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
export default connect(mapStateToProps, {addFillToSelected})(Attributes);
