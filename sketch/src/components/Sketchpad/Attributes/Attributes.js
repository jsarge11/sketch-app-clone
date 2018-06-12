import React, {Component} from 'react';
import './attributes.css';
import {connect} from 'react-redux';
import BasicShapeAtt from './BasicShapeAtt/BasicShapeAtt';
import TextAtt from './TextAtt/TextAtt';
import {addFillToSelected, deleteFillFromSelected, deleteBorderFromSelected, updateFillOnSelected, addBorderOnSelected,updateBorderOnSelected, addShadowOnSelected, deleteShadowOnSelected, updateShadowOnSelected, addBlurOnSelected, deleteBlurOnSelected, updateBlurOnSelected, updateOpacityOnSelected, updatePositionOnSelected, updateSizeOnSelected, updateRotateOnSelected, updateZIndexOnSelected, updateFontColor, addFontColorToSelected, updateFontFamily, updateFontSize, updateFontWeight, updateTextAlign, updateLetterSpacing, updateLineHeight, addToChanged, updateSelected} from '../../../ducks/shapesReducer'

class Attributes extends Component {
  constructor(){
    super()
    this.state ={
      rotateAmt: 0
    }
    this.addFillOnSelected = this.addFillOnSelected.bind(this);
    this.deleteFillOnSelected = this.deleteFillOnSelected.bind(this);
    this.addBorderOnSelected = this.addBorderOnSelected.bind(this);
    this.deleteBorderOnSelected = this.deleteBorderOnSelected.bind(this);
    this.updateFillOnSelected = this.updateFillOnSelected.bind(this);
    this.updateBorderOnSelected = this.updateBorderOnSelected.bind(this);
    this.addShadowOnSelected = this.addShadowOnSelected.bind(this);
    this.deleteShadowOnSelected = this.deleteShadowOnSelected.bind(this);
    this.updateShadowOnSelected = this.updateShadowOnSelected.bind(this);
    this.addBlurOnSelected = this.addBlurOnSelected.bind(this);
    this.deleteBlurOnSelected = this.deleteBlurOnSelected.bind(this);
    this.updateBlurOnSelected = this.updateBlurOnSelected.bind(this);
    this.updateOpacityOnSelected = this.updateOpacityOnSelected.bind(this);
    this.updatePositionOnSelected = this.updatePositionOnSelected.bind(this);
    this.updateSizeOnSelected = this.updateSizeOnSelected.bind(this);
    this.updateRotateOnSelected = this.updateRotateOnSelected.bind(this);
    this.updateZIndexOnSelected = this.updateZIndexOnSelected.bind(this);
    this.updateFontColor = this.updateFontColor.bind(this);
    this.addFontColor = this.addFontColor.bind(this);
    this.updateFontFamily = this.updateFontFamily.bind(this);
    this.updateFontSize = this.updateFontSize.bind(this);
    this.updateFontWeight = this.updateFontWeight.bind(this);
    this.updateTextAlign = this.updateTextAlign.bind(this);
    this.updateLetterSpacing = this.updateLetterSpacing.bind(this);
    this.updateLineHeight = this.updateLineHeight.bind(this);
  }

              // Selected Shape Background Color Manipulation //

  addFillOnSelected(){
    var combinedWithBC = Object.assign({}, this.props.shapes.selected, {backgroundColor: '#939393'})
    this.props.addFillToSelected(combinedWithBC);
    this.props.addToChanged();
  }

  deleteFillOnSelected(){
    var withoutBC = Object.assign({}, this.props.shapes.selected, {backgroundColor: undefined})
    this.props.deleteFillFromSelected(withoutBC);
    this.props.addToChanged();
  }

  updateFillOnSelected(color){
    var updateBC = Object.assign({}, this.props.shapes.selected, {backgroundColor: color})
    this.props.updateFillOnSelected(updateBC);
    this.props.addToChanged();
  }
              // Selected Shape Border Manipulation //

  addBorderOnSelected(){
    var combinedWithBorder = Object.assign({}, this.props.shapes.selected, {border: 2})
    this.props.addBorderOnSelected(combinedWithBorder);
    this.props.addToChanged();

  }

  deleteBorderOnSelected(){
    var withoutBorder = Object.assign({}, this.props.shapes.selected, {border: undefined})
    this.props.deleteBorderFromSelected(withoutBorder);
    this.props.addToChanged();
  }

  updateBorderOnSelected(border){
    var updateBorder = Object.assign({}, this.props.shapes.selected, {border: border})
    this.props.updateBorderOnSelected(updateBorder);
    this.props.addToChanged();
  }
  
  addShadowOnSelected(){
    var combinedWithShadow = Object.assign({}, this.props.shapes.selected, {boxShadow: '2px 2px 2px 2px #000000'})
    this.props.addShadowOnSelected(combinedWithShadow);
    this.props.addToChanged();
  }

  deleteShadowOnSelected(){
    var withoutShadow = Object.assign({}, this.props.shapes.selected, {boxShadow: undefined})
    this.props.deleteShadowOnSelected(withoutShadow);
    this.props.addToChanged();
  }

  updateShadowOnSelected(shadowString){
    var updatedBoxShadow = Object.assign({}, this.props.shapes.selected, {boxShadow: shadowString})
    this.props.updateShadowOnSelected(updatedBoxShadow);
    this.props.addToChanged();
    
  }

  addBlurOnSelected(){
    var combinedWithShadow = Object.assign({}, this.props.shapes.selected, {filter: `blur(4px)`})
    this.props.addBlurOnSelected(combinedWithShadow);
    this.props.addToChanged();
  }

  deleteBlurOnSelected(){
    var withoutBlur = Object.assign({}, this.props.shapes.selected, {filter: undefined})
    this.props.deleteBlurOnSelected(withoutBlur);
    this.props.addToChanged();
  }

  updateBlurOnSelected(filterString){
    var updatedBlur = Object.assign({}, this.props.shapes.selected, {filter: filterString})
    this.props.updateBlurOnSelected(updatedBlur);
    this.props.addToChanged();
  }

  updateOpacityOnSelected(opacity){
    var updatedOpacity = Object.assign({}, this.props.shapes.selected, {opacity: opacity})
    this.props.updateOpacityOnSelected(updatedOpacity);
    this.props.addToChanged();
  }

  updatePositionOnSelected(x, y){
    var updatedPosition = Object.assign({}, this.props.shapes.selected, {top: y, left: x})
    this.props.updatePositionOnSelected(updatedPosition);
   
    this.props.addToChanged();
  }

  updateSizeOnSelected(width, height){
    var updatedSize = Object.assign({}, this.props.shapes.selected, {width: width, height: height})
    this.props.updateSizeOnSelected(updatedSize);
    this.props.addToChanged();
  }

  updateRotateOnSelected(degree){
    this.setState({
      rotateAmt: degree
    })
    var updatedRotate = Object.assign({}, this.props.shapes.selected, {transform: `rotate(${degree}deg)`})
    this.props.updateRotateOnSelected(updatedRotate);
    this.props.addToChanged();
  }

  updateZIndexOnSelected(amount){
    var updatedZIndex = Object.assign({}, this.props.shapes.selected, {zIndex: amount})
    this.props.updateZIndexOnSelected(updatedZIndex);
    this.props.addToChanged();
  }

  updateFontColor(color){

      var updateFC = Object.assign({}, this.props.shapes.selected, {color: color})
      this.props.updateFontColor(updateFC);
      this.props.addToChanged();
  }

  addFontColor(){
    var combinedWithFC = Object.assign({}, this.props.shapes.selected, {color: '#939393'})
    this.props.addFontColorToSelected(combinedWithFC);
    this.props.addToChanged();
  }

  updateFontFamily(font){
    var updatedFont = Object.assign({}, this.props.shapes.selected, {fontFamily: font})
    this.props.updateFontFamily(updatedFont);
    this.props.addToChanged();
  }

  updateFontSize(size){
    var updatedFontSize = Object.assign({}, this.props.shapes.selected, {fontSize: size})
    this.props.updateFontSize(updatedFontSize);
    this.props.addToChanged();
  }

  updateFontWeight(weight){
    var updatedFontWeight = Object.assign({}, this.props.shapes.selected, {fontWeight: weight})
    this.props.updateFontWeight(updatedFontWeight);
    this.props.addToChanged();
  }

  updateTextAlign(align){
    var updatedTextAlign = Object.assign({}, this.props.shapes.selected, {textAlign: align})
    this.props.updateTextAlign(updatedTextAlign);
    this.props.addToChanged();
  }

  updateLetterSpacing(spacing){
    var updatedLetterSpacing = Object.assign({}, this.props.shapes.selected, {letterSpacing: spacing})
    this.props.updateLetterSpacing(updatedLetterSpacing);
    this.props.addToChanged();
  }

  updateLineHeight(lineHeight){
    var lineHeightString = `${lineHeight}%`
    var updatedLineHeight = Object.assign({}, this.props.shapes.selected, {lineHeight: lineHeightString})
    this.props.updateLineHeight(updatedLineHeight);
    this.props.addToChanged();
  }

  render(){
    // console.log('zIndex', this.props.shapes.selected.zIndex)
    // console.log('rotate', this.props.shapes.selected.transform)
    // console.log('size', this.props.shapes.selected.width, this.props.shapes.selected.height)
    // console.log('position', this.props.shapes.selected.left, this.props.shapes.selected.top)
    // console.log('opacity', this.props.shapes.selected.opacity)
    // console.log('backgroundColor', this.props.shapes.selected.backgroundColor)
    // console.log('border', this.props.shapes.selected.border, this.props.shapes.selected.borderColor)
    // console.log('shadows', this.props.shapes.selected.boxShadow)
    // console.log('filter',this.props.shapes.selected.filter)

    var typeSelected = this.props.shapes.selected.type === 'text' ? 
    // <TriangleAndStarAtt 
    //   addFill = {this.addFillOnSelected} 
    //   deleteFill = {this.deleteFillOnSelected} 
    //   updateFill = {this.updateFillOnSelected} 
    //   addBorder = {this.addBorderOnSelected} 
    //   deleteBorder = {this.deleteBorderOnSelected}
    //   updateBorder = {this.updateBorderOnSelected}
    //   addShadow = {this.addShadowOnSelected}
    //   deleteShadow = {this.deleteShadowOnSelected}
    //   updateShadow = {this.updateShadowOnSelected}
    //   addBlur = {this.addBlurOnSelected}
    //   deleteBlur = {this.deleteBlurOnSelected}
    //   updateBlur = {this.updateBlurOnSelected}
    //   updateOpacity = {this.updateOpacityOnSelected}
    //   updatePosition = {this.updatePositionOnSelected}
    //   updateSize = {this.updateSizeOnSelected}
    //   updateRotate = {this.updateRotateOnSelected}
    //   rotateAmt = {this.state.rotateAmt}
    //   updateZIndex = {this.updateZIndexOnSelected}/> 

    <TextAtt 
      addFontColor = {this.addFontColor}
      updateFontColor = {this.updateFontColor}
      updateFontFamily = {this.updateFontFamily}
      updateFontSize = {this.updateFontSize}
      updateFontWeight = {this.updateFontWeight}
      updateTextAlign = {this.updateTextAlign}
      updateLetterSpacing = {this.updateLetterSpacing}
      updateLineHeight = {this.updateLineHeight}
      updateZIndex = {this.updateZIndexOnSelected}
        />

    : <BasicShapeAtt 
        addFill = {this.addFillOnSelected} 
        deleteFill = {this.deleteFillOnSelected} 
        updateFill = {this.updateFillOnSelected} 
        addBorder = {this.addBorderOnSelected} 
        deleteBorder = {this.deleteBorderOnSelected}
        updateBorder = {this.updateBorderOnSelected}
        addShadow = {this.addShadowOnSelected}
        deleteShadow = {this.deleteShadowOnSelected}
        updateShadow = {this.updateShadowOnSelected}
        addBlur = {this.addBlurOnSelected}
        deleteBlur = {this.deleteBlurOnSelected}
        updateBlur = {this.updateBlurOnSelected}
        updateOpacity = {this.updateOpacityOnSelected}
        updatePosition = {this.updatePositionOnSelected}
        updateSize = {this.updateSizeOnSelected}
        updateRotate = {this.updateRotateOnSelected}
        rotateAmt = {this.state.rotateAmt}
        updateZIndex = {this.updateZIndexOnSelected}/>
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
export default connect(mapStateToProps, { addToChanged, updateSelected, addFillToSelected, deleteFillFromSelected, deleteBorderFromSelected, updateFillOnSelected, addBorderOnSelected, updateBorderOnSelected, addShadowOnSelected, deleteShadowOnSelected, updateShadowOnSelected, addBlurOnSelected, deleteBlurOnSelected, updateBlurOnSelected, updateOpacityOnSelected, updatePositionOnSelected, updateSizeOnSelected, updateRotateOnSelected, updateZIndexOnSelected, updateFontColor, addFontColorToSelected, updateFontFamily, updateFontSize, updateFontWeight, updateTextAlign, updateLetterSpacing, updateLineHeight})(Attributes);
