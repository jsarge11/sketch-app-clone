import React, { Component } from 'react';
import '../attributes.css';
import TiLockOpen from 'react-icons/lib/ti/lock-open';
import TiLockClosed from 'react-icons/lib/ti/lock-closed';
import TiPlus from 'react-icons/lib/ti/plus';
import {connect} from 'react-redux';
import FaTrash from 'react-icons/lib/fa/trash';

class SquareAttributes extends Component {
    constructor(){
        super()
        this.state = {
          sizeLock: false,
          opacityValue: 50,
          blur: false,
          blurValue: 0,
          fillChecked: true,
          borderChecked: true,
          shadowsChecked: true
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
    
      handleBlurSlider(e){
        this.setState({
          blurValue: e
        })
      }

      handleIfBlur(blurAmount){
          this.setState({
            blur: !this.state.blur,
            blurValue: blurAmount
          })
      }

    render() { 

        //=================================================================//
        //= Grabs the amount of blur off the selected objects filter key ==//
        //=================================================================//

        var blurAmountIndex = this.props.shapes.selected.filter ? this.props.shapes.selected.filter.search('4px') : null
        var blurAmount =  this.props.shapes.selected.filter ? this.props.shapes.selected.filter[blurAmountIndex] * 1 : null;

        //=================================================================//
        //==== Toggles the lock icon when clicked on for the size boxes ===//
        //=================================================================//
        
        var sizeLock = this.state.sizeLock === true ? <TiLockClosed style = {{fontSize: 13, marginLeft: 10}} onClick = {() => this.toggleSizeLock()}/> : <TiLockOpen style = {{fontSize: 13, marginLeft: 10}} onClick = {() => this.setState({sizeLock: !this.state.sizeLock})}/>

        //=================================================================//
        //===== Splits the box shadow string off the selected object ======//
        //=================================================================//
        
        var selectedBoxShadowSplitValues = this.props.shapes.selected.boxShadow ? this.props.shapes.selected.boxShadow.split(' ') : null
    
        var attributesTabs = 
        
        //=================================================================//
        //================ If there is a selected object ==================//
        //=================================================================//
        
        this.props.shapes.selected.length !== 0 ? 
        <div className = 'att-flex-column'>
        <div className = 'att-flex-row' style ={{marginBottom: 20, paddingTop: 20, borderTop: '1px solid #a5a5a5'}}>
          <label>Opacity</label>
          <input type = "range" max = {100} defaultValue = {50} min = {0} style = {{width: 100, backgroundColor: 'blue'}} value = {this.state.opacityValue}onChange = {(e) =>  this.handleOpacitySlider(e.target.value)}/>
          <input value = {this.state.opacityValue} onChange = {(e) => this.handleOpacitySlider(e.target.value)}/>
        </div>
    
{        //=================================================================//
        //========= If selected object & it has a backgroundColor ==========//
        //=================================================================//
    }
            {this.props.shapes.selected.backgroundColor !== undefined ? 
          <div className = 'att-flex-column'>
            <div className = 'att-flex-row-closed'>
              <p>Fills</p>
              <div style = {{marginRight: 10, marginLeft: 'auto'}}>
                <FaTrash  style = {{fontSize: 15, color: '#7f7e7e'}}/>
              </div>
            </div>
            <div className = 'att-flex-row' style = {{marginBottom: 20}}>
            <div>
                <input type = "checkbox" defaultChecked = 'true' onChange = {() => this.setState({fillChecked: !this.state.fillChecked})}/>
                <input type = "color" defaultValue = {this.props.shapes.selected.backgroundColor} style = {{borderRadius: 6, width: 40}} />
            </div>

            </div>
          </div>
     : //=================================================================//
        //=== If selected object & it does not have a backgroundColor ====//
        //=================================================================//
    
          <div className = 'att-flex-column'>
            <div className = 'att-flex-row-closed'>
              <p>Fills</p>
              <div style = {{marginRight: 10, marginLeft: 'auto'}}>
                <TiPlus  style = {{fontSize: 20, color: '#7f7e7e'}} onClick = {() => this.props.addFill()}/>
              </div>
            </div>
          </div>}
            
{    //=================================================================//
    //============= If selected object & it has a border ==============//
    //=================================================================//
}            
            {this.props.shapes.selected.border !== undefined ? 
          <div className = "att-flex-column">
            <div className = 'att-flex-row-closed'>
              <p>Borders</p>
              <div style = {{marginRight: 10, marginLeft: 'auto'}}>
                <FaTrash  style = {{fontSize: 15, color: '#7f7e7e'}}/>
              </div>
            </div>
            <div className = 'att-flex-row' style = {{marginBottom: 20}}>
              <input type = "checkbox" defaultChecked = 'true' onChange = {() => this.setState({borderChecked: !this.state.borderChecked})}/>
              <input type = "color" defaultValue = {this.props.shapes.selected.borderColor} style = {{borderRadius: 6, width: 40}} />
              <input defaultValue = {this.props.shapes.selected.border} style = {{width: 50}}/>
            </div> 
            </div>:

        //=================================================================//
        //======== If selected object & it does not have a border =========//
        //=================================================================//

                  <div className = 'att-flex-row-closed'>
                  <p>Borders</p>
                  <div style = {{marginRight: 10, marginLeft: 'auto'}}>
                    <TiPlus  style = {{fontSize: 20, color: '#7f7e7e'}}/>
                  </div>
                </div>}

{    //=================================================================//
    //============ If selected object & it has a boxShadow =============//
    //=================================================================//
} 
                {this.props.shapes.selected.boxShadow !== undefined ? <div className = "att-flex-column">
            <div className = 'att-flex-row-closed'>
              <p>Shadows</p>
              <div style = {{marginRight: 10, marginLeft: 'auto'}}>
                <FaTrash  style = {{fontSize: 15, color: '#7f7e7e'}}/>
              </div>
            </div>
            <div className = 'att-flex-row' style = {{marginTop: 0}}>
              <input type = "checkbox" defaultChecked = 'true' onChange = {() => this.setState({shadowsChecked: !this.state.shadowsChecked})}/>
              <input type = "color" defaultValue = {selectedBoxShadowSplitValues[4] ? selectedBoxShadowSplitValues[4] : '#987D7D'} style = {{borderRadius: 6, width: 40}} />
              <div className = 'att-flex-row' style ={{flexWrap: 'wrap', marginBottom: 20}}>
                <input defaultValue = {selectedBoxShadowSplitValues[0][0] ? selectedBoxShadowSplitValues[0][0] * 1 : 0} style = {{width: '30%'}}/>
                <input defaultValue = {selectedBoxShadowSplitValues[1][0] ? selectedBoxShadowSplitValues[1][0] * 1 : 0} style = {{width: '30%'}}/>
                <input defaultValue = {selectedBoxShadowSplitValues[2][0] ? selectedBoxShadowSplitValues[2][0] * 1 : 0} style = {{width: '30%', marginTop: 10}}/>
                <input defaultValue = {selectedBoxShadowSplitValues[3][0] ? selectedBoxShadowSplitValues[3][0] * 1 : 0} style = {{width: '30%', marginTop: 10}}/>
              </div>
    
            </div> 
            </div>:

        //=================================================================//
        //====== If selected object & it does not have a boxShadow ========//
        //=================================================================//

                  <div className = 'att-flex-row-closed'>
                  <p>Shadows</p>
                  <div style = {{marginRight: 10, marginLeft: 'auto'}}>
                    <TiPlus  style = {{fontSize: 20, color: '#7f7e7e'}}/>
                  </div>
            </div> }

{    //=================================================================//
    //========== If selected object & it has a filter(blur) ============//
    //=================================================================//
} 
            {this.props.shapes.selected.filter !== undefined ? 
             <div className = "att-flex-column">
             <div className = 'att-flex-row-closed'>
               <p>Blur</p>
                <input type = "checkbox" value = {this.state.blur} onChange = {() => this.handleIfBlur(blurAmount)}/>
               </div>

{    //============================================================================//
    //= If selected object & it has a filter(blur) & they checked the box to blur =//
    //=============================================================================//
}        
               {this.state.blur ? 
               <div className = 'att-flex-row'>
                    <label>Amount</label>
                    <input type = "range" defaultValue = {this.state.blurValue} max = {50} min = {0} onChange = {(e) => this.handleBlurSlider(e.target.value)}/>
                    <input value = {this.state.blurValue} onChange = {(e) => this.handleBlurSlider(e.target.value)}/>
               </div>: null}
               </div> : 

        //=================================================================//
        //===== If selected object & it does not have a filter(blur) ======//
        //=================================================================// 

             <div className = "att-flex-column">
             <div className = 'att-flex-row-closed'>
               <p>Blur</p>
               <div style = {{marginRight: 10, marginLeft: 'auto'}}>
                <TiPlus  style = {{fontSize: 20, color: '#7f7e7e'}}/>
               </div>

               </div> 
               </div>}      
          </div>
    
        : 

        //=================================================================//
        //============== If there is not a selected object ================//
        //=================================================================//   

        <div className = 'att-flex-column'>
          <div className = 'att-flex-row-closed'>
              <p>Fills</p>
              <div style = {{marginRight: 10, marginLeft: 'auto'}}>
                <FaTrash  style = {{fontSize: 15, color: '#7f7e7e'}}/>
              </div>
          </div>
          <div className = 'att-flex-row-closed'>
            <p>Borders</p>
            <div style = {{marginRight: 10, marginLeft: 'auto'}}>
              <TiPlus  style = {{fontSize: 20, color: '#7f7e7e'}}/>
            </div>
          </div>
          <div className = 'att-flex-row-closed'>
            <p>Shadows</p>
            <div style = {{marginRight: 10, marginLeft: 'auto'}}>
              <TiPlus  style = {{fontSize: 20, color: '#7f7e7e'}}/>
            </div>
          </div>  
          <div className = 'att-flex-row-closed'>
            <p>Blur</p>
            <div style = {{marginRight: 10, marginLeft: 'auto'}}>
              <TiPlus  style = {{fontSize: 20, color: '#7f7e7e'}}/>
            </div>
          </div>                
        </div>
      
    
    
        //=================================================================//
        //======== Position, Size, and Rotate are always visible  =========//
        //=================================================================//

        return (
          <div>
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
  export default connect(mapStateToProps)(SquareAttributes);