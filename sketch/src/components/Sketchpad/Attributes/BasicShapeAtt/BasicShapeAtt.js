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
          blur: true,
          blurValue: '',
          backgroundColor: '',
          borderWidth: 0
        }
      }
    
      toggleSizeLock(){
        this.setState({sizeLock: !this.state.sizeLock})
      }
    
      handleOpacitySlider(e){
        this.props.updateOpacity(e / 100)
        this.setState({
          opacityValue: e
        })

      }
    
      handleBlurSlider(e){     
        this.setState({
          blurValue: e
        })

        var blurString = `blur(${e}px)`

        this.props.updateBlur(blurString)
      }

      handleIfBlur(e){
          this.setState({
            blur: !this.state.blur,
            blurValue: e
          })

          if(this.state.blur === true){
            this.props.addBlur()
          } else {
            this.props.deleteBlur()
          }
          

      }

      grabUpdatedColor(){
      var color = document.getElementById('newFillColor').value 
      this.props.updateFill(color)
      }

      updateBorder(e){
        var color = document.getElementById('newBorderColor').value
        this.props.updateBorder(color, e * 1)
      }

      updateShadow(){
        let color = document.getElementById('newShadowColor').value
        let hOffset = document.getElementById('h-offset').value
        let vOffset = document.getElementById('v-offset').value
        let blur = document.getElementById('shadowBlur').value
        let spread = document.getElementById('shadowSpread').value

        var shadowString = `${hOffset ? hOffset: 2}px ${vOffset ? vOffset: 2}px ${blur ? blur : 2}px ${spread ? spread : 2}px ${color}`
        this.props.updateShadow(shadowString)

      }

    render() { 

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
          <input type = "range" max = {100} defaultValue = {this.props.shapes.selected.opacity ? this.props.shapes.selected.opacity : 100} min = {0} style = {{width: 100, backgroundColor: 'blue'}} value = {this.state.opacityValue}onChange = {(e) =>  this.handleOpacitySlider(e.target.value)}/>
          <input value = {this.props.shapes.selected.opacity ? this.props.shapes.selected.opacity : 100} onChange = {(e) => this.handleOpacitySlider(e.target.value)}/>
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
                <FaTrash  style = {{fontSize: 15, color: '#7f7e7e'}} onClick = {() => this.props.deleteFill()}/>
              </div>
            </div>
            <div className = 'att-flex-row' style = {{marginBottom: 20}}>
            <div>
                <label>Fill Color:</label>
                <input id = "newFillColor" type = "color" defaultValue = {this.props.shapes.selected.backgroundColor} style = {{borderRadius: 6, width: 40}} onChange = {() => this.grabUpdatedColor()}/>
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
                <FaTrash  style = {{fontSize: 15, color: '#7f7e7e'}} onClick = {() => this.props.deleteBorder()}/>
              </div>
            </div>
            <div className = 'att-flex-row' style = {{marginBottom: 20}}>
            <div>
              <label>Color:</label>
              <input id = "newBorderColor" type = "color" defaultValue = {this.props.shapes.selected.borderColor} style = {{borderRadius: 6, width: 40}} onChange = {() => this.updateBorder()}/>              
            </div>
            <div>
              <label>Thickness:</label>
              <input id = "newBorderWidth" defaultValue = {this.props.shapes.selected.border} style = {{width: 50}} onChange = {(e) => this.updateBorder(e.target.value)}/>              
            </div>
            </div> 
            </div>:

        //=================================================================//
        //======== If selected object & it does not have a border =========//
        //=================================================================//

                  <div className = 'att-flex-row-closed'>
                  <p>Borders</p>
                  <div style = {{marginRight: 10, marginLeft: 'auto'}}>
                    <TiPlus  style = {{fontSize: 20, color: '#7f7e7e'}} onClick = {() => this.props.addBorder()}/>
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
                <FaTrash  style = {{fontSize: 15, color: '#7f7e7e'}} onClick = {() => this.props.deleteShadow()}/>
              </div>
            </div>
            <div className = 'att-flex-row' style = {{marginTop: 0}}>
              <input id = "newShadowColor" type = "color" defaultValue = {selectedBoxShadowSplitValues[4] ? selectedBoxShadowSplitValues[4] : '#987D7D'} style = {{borderRadius: 6, width: 40}} onChange = {() => this.updateShadow()}/>
              <div className = 'att-flex-row' style ={{flexWrap: 'wrap', marginBottom: 20}}>
              <div>
                <label>H-Offset:</label>
                <input id = "h-offset" defaultValue = {selectedBoxShadowSplitValues[0][0] ? selectedBoxShadowSplitValues[0][0] * 1 : 0} style = {{width: '30%', fontSize: 10}} onChange = {() => this.updateShadow()}/>                
              </div>
              <div>
                <label>V-Offset:</label>
                <input id = "v-offset" defaultValue = {selectedBoxShadowSplitValues[1][0] ? selectedBoxShadowSplitValues[1][0] * 1 : 0} style = {{width: '30%', fontSize: 10, marginTop: 10}} onChange = {() => this.updateShadow()}/>
              </div>
              <div>
                <label>Blur:</label>
                <input id = "shadowBlur" defaultValue = {selectedBoxShadowSplitValues[2][0] ? selectedBoxShadowSplitValues[2][0] * 1 : 0} style = {{width: '30%', fontSize: 10, marginTop: 10}} onChange = {() => this.updateShadow()}/>
              </div>
              <div>
                <label>Spread:</label>
                <input id = "shadowSpread" defaultValue = {selectedBoxShadowSplitValues[3][0] ? selectedBoxShadowSplitValues[3][0] * 1 : 0} style = {{width: '30%', fontSize: 10, marginTop: 10}} onChange = {() => this.updateShadow()}/>
              </div>
              </div>
    
            </div> 
            </div>:

        //=================================================================//
        //====== If selected object & it does not have a boxShadow ========//
        //=================================================================//
            <div className = "att-flex-column">
             <div className = 'att-flex-row-closed'>
                <p>Shadows</p>
                <div style = {{marginRight: 10, marginLeft: 'auto'}}>
                  <TiPlus  style = {{fontSize: 20, color: '#7f7e7e'}} onClick = {() => this.props.addShadow()}/>
                </div>
              </div>
            </div>
                  }

{    //=================================================================//
    //========== If selected object & it has a filter(blur) ============//
    //=================================================================//
} 
            {this.props.shapes.selected.filter !== undefined ? 
             <div className = "att-flex-column">
             <div className = 'att-flex-row-closed'>
               <p>Blur</p>
                <input type = "checkbox" value = {this.state.blur} onChange = {(e) => this.handleIfBlur(e.target.value)} style = {{marginRight: 10}}/>
               </div>

{    //============================================================================//
    //= If selected object & it has a filter(blur) & they checked the box to blur =//
    //=============================================================================//
}        
               {this.state.blur === false ? 
               <div className = "att-flex-column">
               <div className = 'att-flex-row'>
                    <label>Amount</label>
                    <input value = {+(this.props.shapes.selected.filter[6] !== 'p' ? this.props.shapes.selected.filter[5] + this.props.shapes.selected.filter[6] : this.props.shapes.selected.filter[5])} onChange = {(e) => this.handleBlurSlider(e.target.value)}/>
               </div>
               <input style = {{margin: 20}} type = "range" value = {+(this.props.shapes.selected.filter[6] !== 'p' ? this.props.shapes.selected.filter[5] + this.props.shapes.selected.filter[6] : this.props.shapes.selected.filter[5])} max = {50} min = {0} onChange = {(e) => this.handleBlurSlider(e.target.value)}/>
               </div>
: null}
               </div> : 

        //=================================================================//
        //===== If selected object & it does not have a filter(blur) ======//
        //=================================================================// 

        <div className = "att-flex-column">
        <div className = 'att-flex-row-closed'>
          <p>Blur</p>
           <input type = "checkbox" value = {this.state.blur} onChange = {(e) => this.handleIfBlur(e.target.value)} style = {{marginRight: 10}}/>
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
          <div className = "att-flex-column">
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