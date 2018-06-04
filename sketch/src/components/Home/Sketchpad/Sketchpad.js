import React, { Component } from 'react'
import Shape from '../Shape/Shape'
import { connect } from 'react-redux'

class Sketchpad extends Component {
 

 render() {
  let { shapes } = this.props;
      var shapesArr = shapes.shapes.map((item, i) => {
        var itemObjWithType = {
          className: `shape_${item.id}`,
          id: item.id,
          borderRadius: item.body.borderRadius,
          backgroundColor: item.body.backgroundColor,
          height: item.body.height,
          width: item.body.width,
          top: item.body.top,
          left: item.body.left,
          type: item.e_type,
          border: item.body.border,
          borderColor: item.body.borderColor,
          boxShadow: item.body.boxShadow,
          opacity: item.body.opacity,
          transform: item.body.transform,
          filter: item.body.filter,
          zIndex: item.body.zIndex

        }
        return (
         <div key={i}>
          <Shape item = {itemObjWithType}/>   
         </div>
        )
      })

      return (
        <div id="ske-sketchpad"> 
        <span>
         <button>+</button>
         <button>-</button>
        </span>      
          {shapesArr}
        </div>
      )
 }
}
function mapStateToProps(state) {
 let { user } = state.users;
 let { shapes } = state;
 return {
   user,
   shapes
 }
}

export default connect(mapStateToProps)(Sketchpad);
