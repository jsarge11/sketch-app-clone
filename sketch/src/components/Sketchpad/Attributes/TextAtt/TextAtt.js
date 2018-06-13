import React, { Component } from 'react';
import '../attributes.css';
import TiPlus from 'react-icons/lib/ti/plus';
import {connect} from 'react-redux';
import {updateSelected} from '../../../../ducks/shapesReducer';
import './textatt.css'

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

    grabUpdatedFontColor(){
        var color = document.getElementById('newFontColor').value 
        this.props.updateFontColor(color)
        this.props.updateSelected();
        }

    updateFontFamily(e){
        this.props.updateFontFamily(e);
        this.props.updateSelected();
    }

    updateFontSize(e){
        this.props.updateFontSize(+e);
        this.props.updateSelected();
    }

    updateFontWeight(e){
        this.props.updateFontWeight(+e);
        this.props.updateSelected();
    }

    updateTextAlign(e){
        this.props.updateTextAlign(e);
        this.props.updateSelected();
    }

    updateLetterSpacing(){
        var letterSpacing = document.getElementById('newLetterSpacing').value;
        this.props.updateLetterSpacing(+letterSpacing);
        this.props.updateSelected();
    }

    updateLineHeight(){
        var lineHeight = document.getElementById('newLineHeight').value;
        this.props.updateLineHeight(+lineHeight);
        this.props.updateSelected();
    }

    updateZIndex(e){
        this.props.updateZIndex(+e);
        this.props.updateSelected();
      }

      copyCssCode(e, cssObj){
        e.stopPropagation();
        var old = JSON.stringify(cssObj).replace(/Weight/g, "-weight").replace(/Family/g, "-family").replace(/Index/g, "-index").replace(/Size/g, "-size").replace(/"/g, "").replace(/,w/g, ";w").replace(/Align/g, "-align").replace(/,t/g, ";t").replace(/,l/g, ";l").replace(/,z/g, ";z").replace(/,c/g, ";c").replace(/,f/g, ";f").replace(/,t/g, ";t").replace(/,h/g, ";h")
        const el = document.createElement('textarea');
        el.value = `Enter Class Name ${old}`;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
     }


    render() { 

        var attributteTabs = 
    <div className = 'att-flex-column'>
    {   this.props.shapes.selected.color !== undefined ?   
            <div className = 'att-flex-column'>
            <div className = 'att-flex-row-closed'>
            <p>Font Color</p>
            </div>
            <div className = 'att-flex-row' style = {{marginBottom: 10}}>
                <div>
                    <label>Font Color:</label>
                    <input id = "newFontColor" type = "color" value = {this.props.shapes.selected.color} style = {{borderRadius: 6, width: 40}} onChange = {() => this.grabUpdatedFontColor()}/>
                </div>
            </div>
      </div> : 
              <div className = 'att-flex-column'>
              <div className = 'att-flex-row-closed'>
                <p>Font Color</p>
                <div style = {{marginRight: 10, marginLeft: 'auto'}}>
                  <TiPlus  style = {{fontSize: 20, color: '#7f7e7e'}} onClick = {() => {this.props.addFontColor(); this.props.updateSelected()}}/>
                </div>
              </div>
            </div>}
    {   this.props.shapes.selected.fontFamily !== undefined ? 
                <div className = 'att-flex-column'>
                <div className = 'att-flex-row-closed'>
                <p>Font Family</p>
                </div>
                <div className = 'att-flex-row' style = {{marginBottom: 10}}>
                    <div>
                        <label>Font Family: </label>
                        <select defaultValue = "sans-serif" style = {{width: '90%'}} onChange = {(e) => this.updateFontFamily(e.target.value)}>
                            <option>Arial, sans-serif</option>
                            <option>Helvetica, sans-serif</option>
                            <option>Verdana, sans-serif</option>
                            <option>Trebuchet MS, sans-serif</option>
                            <option>Gill Sans, sans-serif</option>
                            <option>Noto Sans, sans-serif</option>
                            <option>Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif</option>
                            <option>Optima, sans-serif</option>
                            <option>Arial Narrow, sans-serif</option>
                            <option>sans-serif</option>
                            <option>Times, Times New Roman, serif</option>
                            <option>Didot, serif</option>
                            <option>Georgia, serif</option>
                            <option>Palatino, URW Palladio L, serif</option>
                            <option>Bookman, URW Bookman L, serif</option>
                            <option>New Century Schoolbook, TeX Gyre Schola, serif</option>
                            <option>American Typewriter, serif</option>
                            <option>serif</option>
                            <option>Andale Mono, monospace</option>
                            <option>Courier New, monospace</option>
                            <option>Courier, monospace</option>
                            <option>FreeMono, monospace</option>
                            <option>OCR A Std, monospace</option>
                            <option>DejaVu Sans Mono, monospace</option>
                            <option>monospace</option>
                            <option>Comic Sans MS, Comic Sans, cursive</option>
                            <option>Apple Chancery, cursive</option>
                            <option>Bradley Hand, cursive	</option>
                            <option>Brush Script MT, Brush Script Std, cursive</option>
                            <option>Snell Roundhand, cursive	</option>
                            <option>URW Chancery L, cursive</option>
                            <option>cursive</option>
                            <option>Impact, fantasy</option>
                            <option>Luminari, fantasy</option>
                            <option>Chalkduster, fantasy</option>
                            <option>Jazz LET, fantasy</option>
                            <option>Blippo, fantasy</option>
                            <option>Stencil Std, fantasy</option>
                            <option>Marker Felt, fantasy</option>
                            <option>Trattatello, fantasy</option>
                            <option>fantasy</option>
                        </select>
                    </div>
                </div>
          </div> : null}

    {this.props.shapes.selected.fontSize !== undefined ? 
          <div className = 'att-flex-column'>
          <div className = 'att-flex-row-closed'>
            <p>Font Size</p>
          </div>
          <div className = 'att-flex-row' style = {{marginBottom: 10}}>
          <div>
              <label>Font Size:</label>
              <input type = "number" max = {72} defaultValue = {this.props.shapes.selected.fontSize ? this.props.shapes.selected.fontSize : 14} style = {{borderRadius: 6, width: 40}} onChange = {(e) => this.updateFontSize(e.target.value)}/>
          </div>
          </div>
        </div>
   : null      
}
    {this.props.shapes.selected.fontWeight !== undefined ? 
          <div className = 'att-flex-column'>
          <div className = 'att-flex-row-closed'>
            <p>Font Weight</p>
          </div>
          <div className = 'att-flex-row' style = {{marginBottom: 10}}>
          <div>
              <label>Font Weight:</label>
              <input type = "number" step = {100} min = {100} max = {900} defaultValue = {this.props.shapes.selected.fontWeight ? this.props.shapes.selected.fontWeight : 400} style = {{borderRadius: 6, width: 50}} onChange = {(e) => this.updateFontWeight(e.target.value)}/>
          </div>
          </div>
        </div>
   : null         
}

{this.props.shapes.selected.textAlign !== undefined ? 
    <div className = 'att-flex-column'>
    <div className = 'att-flex-row-closed'>
      <p>Text Align</p>
    </div>
    <div className = 'att-flex-row' style = {{marginBottom: 10}}>
    <div>
        <label>Text Align: </label>
        <select defaultValue = "center" style = {{width: 80}} onChange = {(e) => this.updateTextAlign(e.target.value)}>
            <option>center</option>
            <option>left</option>
            <option>right</option>
        </select>
    </div>
    </div>
  </div>
: null    
}
{this.props.shapes.selected.letterSpacing || this.props.shapes.selected.lineHeight ?
    <div className = 'att-flex-column'>
    <div className = 'att-flex-row-closed'>
      <p>Spacing: </p>
    </div>
    <div className = 'att-flex-row' style = {{marginBottom: 10}}>
    <div>
        <label>Letter Spacing: </label>
        <input max = {10} min = {0} id = "newLetterSpacing" type = "number" defaultValue = {this.props.shapes.selected.letterSpacing ? this.props.shapes.selected.letterSpacing : 0} onChange = {() => {this.updateLetterSpacing()}}/>
    </div>
    </div>
    <div className = 'att-flex-row' style = {{marginBottom: 10}}>
        <label style = {{textAlign: 'center'}}>Line Height: </label>
        <input step = {20} min = {0}   max = {500} id = "newLineHeight" type = "number"  defaultValue = {this.props.shapes.selected.letterSpacing ? this.props.shapes.selected.letterSpacing : 100} onChange = {() => {this.updateLineHeight()}}/>
    </div>

  </div>
: null 
}
 {this.props.shapes.selected.zIndex !== undefined || this.props.shapes.selected.zIndex === 0 ? 
               <div className = "att-flex-column">
                 <div className = "att-flex-row"
                 onMouseOver={()=>document.getElementById('att-zindex-text').style.visibility = "visible"}        
                 onMouseLeave={()=>document.getElementById('att-zindex-text').style.visibility = "hidden"}>
                    <label>Bring Forward/Backward</label>
                    <input type = "number" min = {0} value = {this.props.shapes.selected.zIndex ? this.props.shapes.selected.zIndex : 0} onChange = {(e) => this.updateZIndex(e.target.value)}/>
                    <div id="att-zindex-text">
                      <li onClick={()=>this.updateZIndex(0)}>Send to Back</li>
                      <li onClick={()=>this.updateZIndex(100)}>Send to Front</li>
                    </div>
                 </div>
               </div>: 
              <div className = "att-flex-column">
                <div className = "att-flex-row">
                  <label>Bring Forward/Backward</label>
                </div>
              </div>}

</div>



        return ( 
            <div className = "att-flex-column">
            <div className = "att-section-1">
              <div className = "att-flex-row">
                <label>Position</label>
                <div style ={{display: 'flex', flexDirection: "column"}}>
                  <label style = {{fontSize: 11}}>x:</label>
                  <input style = {{backgroundColor: '#f3f3f3', color: 'grey'}} disabled id = "positionX" value = {this.props.shapes.selected.left ? this.props.shapes.selected.left : 0} onKeyPress = {(e) => {if(e.key === 'Enter'){this.updatePosition(e.target.value)}} }/>
                </div>
                <div style ={{display: 'flex', flexDirection: "column"}}>
                  <label style = {{fontSize: 11}}>y:</label>
                  <input style = {{backgroundColor: '#f3f3f3', color: 'grey'}} disabled id = "positionY" value = {this.props.shapes.selected.top ? this.props.shapes.selected.top : 0} onKeyPress = {(e) => {if(e.key === 'Enter'){this.updatePosition(e.target.value)}} }/>
                </div>
              </div>
              <div className = "att-flex-row" style = {{marginBottom: 10}}>
                <label>Size</label>
                <div style ={{display: 'flex', flexDirection: "column"}}>
                  <label style = {{fontSize: 11}}>Width:</label>
                  <input style = {{backgroundColor: '#f3f3f3', color: 'grey'}} disabled id = "sizeWidth" onKeyPress = {(e) => {if(e.key === 'Enter'){this.updateSize(e.target.value)}} } value = {this.props.shapes.selected.width ? this.props.shapes.selected.width : 0}/>
                </div>
                <div style ={{display: 'flex', flexDirection: "column"}}>
                  <label style = {{fontSize: 11}}>Height:</label>
                  <input style = {{backgroundColor: '#f3f3f3', color: 'grey'}} disabled id = "sizeHeight" onKeyPress = {(e) => {if(e.key === 'Enter'){this.updateSize(e.target.value)}} } value = {this.props.shapes.selected.height ? this.props.shapes.selected.height : 0}/>
                </div>
              </div>
            </div>
            {attributteTabs}
            <div className = 'att-flex-row-closed' style = {{justifyContent: 'space-around', alignItems: 'center', textAlign: 'center', margin: 10}}>
                <button id = "copy-css-btn" onClick = {(e) => this.copyCssCode(e, {position: "absolute", height: this.props.shapes.selected.height + "px" , width: this.props.shapes.selected.width + "px" , top: this.props.shapes.selected.top , left: this.props.shapes.selected.left , zIndex: this.props.shapes.selected.zIndex , color: this.props.shapes.selected.color , fontFamily: this.props.shapes.selected.fontFamily , fontSize: this.props.shapes.selected.fontSize + "px" , fontWeight: this.props.shapes.selected.fontWeight , textAlign: this.props.shapes.selected.textAlign})}>Copy CSS Code</button>
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