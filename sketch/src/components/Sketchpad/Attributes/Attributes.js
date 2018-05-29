import React, {Component} from 'react';
import './attributes.css';
import TiLockOpen from 'react-icons/lib/ti/lock-open';
import TiLockClosed from 'react-icons/lib/ti/lock-closed';
import TiCog from 'react-icons/lib/ti/cog';
import TiPlus from 'react-icons/lib/ti/plus';
import {connect} from 'react-redux';

class Attributes extends Component {
  constructor(){
    super()
    this.state = {
      sizeLock: false
    }
  }

  toggleSizeLock(){
    this.setState({sizeLock: !this.state.sizeLock})
  }

  render(){
    var sizeLock = this.state.sizeLock === true ? <TiLockClosed style = {{fontSize: 13, marginLeft: 10}} onClick = {() => this.toggleSizeLock()}/> : <TiLockOpen style = {{fontSize: 13, marginLeft: 10}} onClick = {() => this.setState({sizeLock: !this.state.sizeLock})}/>

    var attributesTabs = this.props.shapes.selected.length !== 0 ? 
    <div className = 'att-flex-column'>

        {this.props.shapes.selected.backgroundColor !== undefined ? 
      <div className = 'att-flex-column'>
        <div className = 'att-flex-row-closed'>
          <p>Fills</p>
          <div style = {{marginRight: 10, marginLeft: 'auto'}}>
            <TiCog style = {{fontSize: 20, color: '#7f7e7e'}}/>
            <TiPlus  style = {{fontSize: 20, color: '#7f7e7e'}}/>
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
        
        <div className = 'att-flex-row-closed'>
          <p>Borders</p>
          <div style = {{marginRight: 10, marginLeft: 'auto'}}>
            <TiPlus  style = {{fontSize: 20, color: '#7f7e7e'}}/>
          </div>
        </div>
        {this.props.shapes.selected.border !== undefined ? 
        <div className = 'att-flex-row'>
          <input type = "checkbox" defaultChecked = 'true'/>
          <input type = "color" defaultValue = {this.props.shapes.selected.borderColor} style = {{borderRadius: 6, width: 40}} />
          <input defaultValue = {this.props.shapes.selected.border} style = {{width: 50}}/>
        </div> :
      null}
      </div>

    :
    <div className = 'att-flex-column'>
      <div className = 'att-flex-row-closed'>
          <p>Fills</p>
          <div style = {{marginRight: 10, marginLeft: 'auto'}}>
            <TiCog style = {{fontSize: 20, color: '#7f7e7e'}}/>
            <TiPlus  style = {{fontSize: 20, color: '#7f7e7e'}}/>
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
