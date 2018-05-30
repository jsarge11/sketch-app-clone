import React, {Component} from 'react';
import './attributes.css';
import TiLockOpen from 'react-icons/lib/ti/lock-open';
import TiLockClosed from 'react-icons/lib/ti/lock-closed';
import TiCog from 'react-icons/lib/ti/cog';
import TiPlus from 'react-icons/lib/ti/plus';
import {connect} from 'react-redux';
import FaTrash from 'react-icons/lib/fa/trash';
import BasicShapeAtt from './BasicShapeAtt/BasicShapeAtt';

class Attributes extends Component {

  render(){
    var typeSelected = this.props.shapes.selected.type === 'square' ? 
    <BasicShapeAtt /> : null
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
