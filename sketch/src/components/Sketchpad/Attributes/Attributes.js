import React, {Component} from 'react';
import './attributes.css';
import TiLockOpen from 'react-icons/lib/ti/lock-open';
import TiLockClosed from 'react-icons/lib/ti/lock-closed';
import TiCog from 'react-icons/lib/ti/cog';
import TiPlus from 'react-icons/lib/ti/plus';
import {connect} from 'react-redux';
import FaTrash from 'react-icons/lib/fa/trash';

class Attributes extends Component {
  constructor(){
    super()
    this.state = {
      sizeLock: false,
      opacityValue: 50
    }
  }

  toggleSizeLock(){
    this.setState({sizeLock: !this.state.sizeLock})
  }

  handleOpacitySlider(e){
    this.setState({
      opacityValue: e
    })
  }

  render(){
    var sizeLock = this.state.sizeLock === true ? <TiLockClosed style = {{fontSize: 13, marginLeft: 10}} onClick = {() => this.toggleSizeLock()}/> : <TiLockOpen style = {{fontSize: 13, marginLeft: 10}} onClick = {() => this.setState({sizeLock: !this.state.sizeLock})}/>

    var selectedBoxShadowSplitValues = this.props.shapes.selected.boxShadow ? this.props.shapes.selected.boxShadow.split(' ') : null
    console.log(selectedBoxShadowSplitValues)

    var attributesTabs = this.props.shapes.selected.length !== 0 ? 
    <div className = 'att-flex-column'>
    <div className = 'att-flex-row' style ={{marginBottom: 20, paddingTop: 20, borderTop: '1px solid #a5a5a5'}}>
      <label>Opacity</label>
      <input type = "range" defaultValue = {50} max = {100} min = {0} style = {{width: 100, backgroundColor: 'blue'}} value = {this.state.opacityValue}onChange = {(e) =>  this.handleOpacitySlider(e.target.value)}/>
      <input value = {this.state.opacityValue} onChange = {(e) => this.handleOpacitySlider(e.target.value)}/>
    </div>

        {this.props.shapes.selected.backgroundColor !== undefined ? 
      <div className = 'att-flex-column'>
        <div className = 'att-flex-row-closed'>
          <p>Fills</p>
          <div style = {{marginRight: 10, marginLeft: 'auto'}}>
            <TiCog style = {{fontSize: 20, color: '#7f7e7e'}}/>
            <FaTrash  style = {{fontSize: 15, color: '#7f7e7e'}}/>
          </div>
        </div>
        <div className = 'att-flex-row' style = {{marginBottom: 20}}>
          <input type = "checkbox" defaultChecked = 'true'/>
          <input type = "color" defaultValue = {this.props.shapes.selected.backgroundColor} style = {{borderRadius: 6, width: 40}} />
          <input defaultValue = '100%' style = {{width: 50}}/>
        </div>
      </div>
 : 
      <div className = 'att-flex-column'>
        <div className = 'att-flex-row-closed'>
          <p>Fills</p>
          <div style = {{marginRight: 10, marginLeft: 'auto'}}>
            <TiPlus  style = {{fontSize: 20, color: '#7f7e7e'}}/>
          </div>
        </div>
      </div>}
        

        {this.props.shapes.selected.border !== undefined ? 
      <div className = "att-flex-column">
        <div className = 'att-flex-row-closed'>
          <p>Borders</p>
          <div style = {{marginRight: 10, marginLeft: 'auto'}}>
            <TiCog style = {{fontSize: 20, color: '#7f7e7e'}}/>
            <FaTrash  style = {{fontSize: 15, color: '#7f7e7e'}}/>
          </div>
        </div>
        <div className = 'att-flex-row'>
          <input type = "checkbox" defaultChecked = 'true'/>
          <input type = "color" defaultValue = {this.props.shapes.selected.borderColor} style = {{borderRadius: 6, width: 40}} />
          <input defaultValue = {this.props.shapes.selected.border} style = {{width: 50}}/>
        </div> 
        </div>:
              <div className = 'att-flex-row-closed'>
              <p>Borders</p>
              <div style = {{marginRight: 10, marginLeft: 'auto'}}>
                <TiPlus  style = {{fontSize: 20, color: '#7f7e7e'}}/>
              </div>
            </div>}
            {this.props.shapes.selected.boxShadow !== undefined ? <div className = "att-flex-column">
        <div className = 'att-flex-row-closed'>
          <p>Shadows</p>
          <div style = {{marginRight: 10, marginLeft: 'auto'}}>
            <TiCog style = {{fontSize: 20, color: '#7f7e7e'}}/>
            <FaTrash  style = {{fontSize: 15, color: '#7f7e7e'}}/>
          </div>
        </div>
        <div className = 'att-flex-row'>
          <input type = "checkbox" defaultChecked = 'true'/>
          <input type = "color" defaultValue = {selectedBoxShadowSplitValues[4] ? selectedBoxShadowSplitValues[4] : '#987D7D'} style = {{borderRadius: 6, width: 40}} />
          <input defaultValue = {selectedBoxShadowSplitValues[0] ? selectedBoxShadowSplitValues[0] : 0} style = {{width: 50}}/>
          <input defaultValue = {selectedBoxShadowSplitValues[1] ? selectedBoxShadowSplitValues[1] : 0} style = {{width: 50}}/>
          <input defaultValue = {selectedBoxShadowSplitValues[2] ? selectedBoxShadowSplitValues[2] : 0} style = {{width: 50}}/>
          <input defaultValue = {selectedBoxShadowSplitValues[3] ? selectedBoxShadowSplitValues[3] : 0} style = {{width: 50}}/>
        </div> 
        </div>:
              <div className = 'att-flex-row-closed'>
              <p>Shadows</p>
              <div style = {{marginRight: 10, marginLeft: 'auto'}}>
                <TiPlus  style = {{fontSize: 20, color: '#7f7e7e'}}/>
              </div>
        </div> }      
      </div>

    :
    <div className = 'att-flex-column'>
      <div className = 'att-flex-row-closed'>
          <p>Fills</p>
          <div style = {{marginRight: 10, marginLeft: 'auto'}}>
            <TiCog style = {{fontSize: 20, color: '#7f7e7e'}}/>
            <FaTrash  style = {{fontSize: 15, color: '#7f7e7e'}}/>
          </div>
      </div>
      <div className = 'att-flex-row-closed'>
        <p>Borders</p>
        <div style = {{marginRight: 10, marginLeft: 'auto'}}>
          <TiPlus  style = {{fontSize: 20, color: '#7f7e7e'}}/>
        </div>
 
      </div>
    </div>
  



    return (
      <div id="ske-attributes">
        <div className = "att-section-1">
          <div className = "att-flex-row">
            <label>Position</label>
            <input />
            <input />
          </div>
          <div className = "att-flex-row">
            <label>Size</label>
            <input />
            {sizeLock}
            <input />
          </div>
          <div className = "att-flex-row">
            <label>Rotate</label>
            <input placeholder = '0&#176;'/>
          </div>
        </div>
        {attributesTabs}
        
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
