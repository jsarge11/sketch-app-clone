import React, { Component } from 'react';
import '../attributes.css';
import TiLockOpen from 'react-icons/lib/ti/lock-open';
import TiLockClosed from 'react-icons/lib/ti/lock-closed';
import TiPlus from 'react-icons/lib/ti/plus';
import {connect} from 'react-redux';
import FaTrash from 'react-icons/lib/fa/trash';
import {updateSelected} from '../../../../ducks/shapesReducer';

class TextAtt extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }

    updateSize(){
        
        let width = document.getElementById('sizeWidth').value * 1;
        let height = document.getElementById('sizeHeight').value * 1;
        this.props.updateSize(width, height)
        this.props.updateSelected();
      }

    updatePosition(){
        let x = document.getElementById('positionX').value * 1;
        let y = document.getElementById('positionY').value * 1;
        this.props.updatePosition(x, y)
        this.props.updateSelected();
      }




    render() { 
        return ( 
            <div className = "att-flex-column">
            <div className = "att-section-1">
              <div className = "att-flex-row">
                <label>Position</label>
                <div style ={{display: 'flex', flexDirection: "column"}}>
                  <label style = {{fontSize: 11}}>x:</label>
                  <input style = {{backgroundColor: 'gray'}} disabled id = "positionX" value = {this.props.shapes.selected.left ? this.props.shapes.selected.left : 0} onKeyPress = {(e) => {if(e.key === 'Enter'){this.updatePosition(e.target.value)}} }/>
                </div>
                <div style ={{display: 'flex', flexDirection: "column"}}>
                  <label style = {{fontSize: 11}}>y:</label>
                  <input style = {{backgroundColor: 'gray'}} disabled id = "positionY" value = {this.props.shapes.selected.top ? this.props.shapes.selected.top : 0} onKeyPress = {(e) => {if(e.key === 'Enter'){this.updatePosition(e.target.value)}} }/>
                </div>
              </div>
              <div className = "att-flex-row">
                <label>Size</label>
                <div style ={{display: 'flex', flexDirection: "column"}}>
                  <label style = {{fontSize: 11}}>Width:</label>
                  <input style = {{backgroundColor: 'gray'}} disabled id = "sizeWidth" onKeyPress = {(e) => {if(e.key === 'Enter'){this.updateSize(e.target.value)}} } value = {this.props.shapes.selected.width ? this.props.shapes.selected.width : 0}/>
                </div>
                <div style ={{display: 'flex', flexDirection: "column"}}>
                  <label style = {{fontSize: 11}}>Height:</label>
                  <input style = {{backgroundColor: 'gray'}} disabled id = "sizeHeight" onKeyPress = {(e) => {if(e.key === 'Enter'){this.updateSize(e.target.value)}} } value = {this.props.shapes.selected.height ? this.props.shapes.selected.height : 0}/>
                </div>
              </div>
            </div>
            
          </div>
         )
    }
}
 
function mapStateToProps(state){
    return {
      shapes: state.shapes
    }
  }
  export default connect(mapStateToProps, {updateSelected})(TextAtt);