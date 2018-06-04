import axios from 'axios';
import ReduxThunk from 'redux-thunk'

const initialState = {
    shapes: [],
    selected: {}
}

const UPDATE_SELECTED = 'UPDATE_SELECTED'
const ADD_SHAPE_TO_ARRAY = 'ADD_SHAPE_TO_ARRAY'
const ADD_SELECTED = 'ADD_SELECTED';
const ADD_FILL_TO_SELECTED = 'ADD_FILL_TO_SELECTED';
const DELETE_FILL_FROM_SELECTED = 'DELETE_FILL_FROM_SELECTED';
const UPDATE_FILL_ON_SELECTED = 'UPDATE_FILL_ON_SELECTED';
const DELETE_BORDER_FROM_SELECTED = 'DELETE_BORDER_FROM_SELECTED';
const ADD_BORDER_ON_SELECTED = 'ADD_BORDER_ON_SELECTED';
const UPDATE_BORDER_ON_SELECTED = 'UPDATE_BORDER_ON_SELECTED';
const ADD_SHADOW_ON_SELECTED = 'ADD_SHADOW_ON_SELECTED';
const DELETE_SHADOW_ON_SELECTED = 'DELETE_SHADOW_ON_SELECTED';
const UPDATE_SHADOW_ON_SELECTED = 'UPDATE_SHADOW_ON_SELECTED';
const ADD_BLUR_ON_SELECTED = 'ADD_BLUR_ON_SELECTED';
const DELETE_BLUR_ON_SELECTED = 'DELETE_BLUR_ON_SELECTED';
const UPDATE_BLUR_ON_SELECTED = 'UPDATE_BLUR_ON_SELECTED';
const UPDATE_OPACITY_ON_SELECTED = 'UPDATE_OPACITY_ON_SELECTED';
const UPDATE_POSITION_ON_SELECTED = 'UPDATE_POSITION_ON_SELECTED';
const UPDATE_SIZE_ON_SELECTED = 'UPDATE_SIZE_ON_SELECTED';
const UPDATE_ROTATE_ON_SELECTED = 'UPDATE_ROTATE_ON_SELECTED';
const UPDATE_ZINDEX_ON_SELECTED = 'UPDATE_ZINDEX_ON_SELECTED';

export function updateZIndexOnSelected(amount){
    return {
        type: UPDATE_ZINDEX_ON_SELECTED,
        payload: amount
    }
}


export function updateSelected() {
    return (dispatch, getState) => {
        const { shapes } = getState();
        
        shapes.shapes.map(item => {
            if (item.id === shapes.selected.id) {
                Object.assign(item.body, shapes.selected);
            }

        })
        dispatch({ 
            type: updateSelected,
        })
    }
}
export function addSelected(shape) {
    console.log('shape', shape)
    return {
        type: ADD_SELECTED,
        payload: shape
    }
}
export function addShapeToArray(type, id) {
    let newType = {
        data: {
            height: 150,
            width: 150,
            position: "absolute", 
            top: 300,
            left: 300,
            backgroundColor: 'lightgrey',
            zIndex: 0,
        },
    }
    if(type === 'circle'){
        newType.data.borderRadius = "50%";
    }
    else if (type === 'square') {
        newType.data.borderRadius = "0";
    }
    const promise = axios.post(`/sketchpads/${id}/elements/${type}`, newType).then(response => 
        response.data)
  
    return {
        type: ADD_SHAPE_TO_ARRAY,
        payload: promise
    }
}
export function updateRotateOnSelected(updatedRotate){
    return {
        type: UPDATE_ROTATE_ON_SELECTED,
        payload: updatedRotate
    }
}

export function updateSizeOnSelected(updatedSize){
    return {
        type: UPDATE_SIZE_ON_SELECTED,
        payload: updatedSize
    }
}

export function updatePositionOnSelected(updatedPosition){
    return {
        type: UPDATE_POSITION_ON_SELECTED,
        payload: updatedPosition
    }
}

export function updateOpacityOnSelected(opacity){
    return {
        type: UPDATE_OPACITY_ON_SELECTED,
        payload: opacity
    }
}

export function updateBlurOnSelected(updatedBlur){
    return {
        type: UPDATE_BLUR_ON_SELECTED,
        payload: updatedBlur
    }
}

export function deleteBlurOnSelected(selectedWithoutBlur){
    return {
        type: DELETE_BLUR_ON_SELECTED,
        payload: selectedWithoutBlur
    }
}

export function addBlurOnSelected(selectedWithBlur){
    return {
        type: ADD_BLUR_ON_SELECTED,
        payload: selectedWithBlur
    }
}

export function updateShadowOnSelected(updatedBoxShadow){
    return {
        type: UPDATE_SHADOW_ON_SELECTED,
        payload: updatedBoxShadow
    }
}

export function deleteShadowOnSelected(selectedWithoutShadow){
    return {
        type: DELETE_SHADOW_ON_SELECTED,
        payload: selectedWithoutShadow
    }
}

export function addShadowOnSelected(selectedWithShadow){
    return{
        type: ADD_SHADOW_ON_SELECTED,
        payload: selectedWithShadow
    }
}

export function updateBorderOnSelected(updatedBorder){
    return {
        type: UPDATE_BORDER_ON_SELECTED,
        payload: updatedBorder
    }
}

export function addBorderOnSelected(selectedWithBorder){
    return {
        type: ADD_BORDER_ON_SELECTED,
        payload: selectedWithBorder
    }
}

export function updateFillOnSelected(updatedBC){
    return {
        type: UPDATE_FILL_ON_SELECTED,
        payload: updatedBC
    }
}

export function deleteBorderFromSelected(selectedWithoutBorder){
    return {
        type: DELETE_BORDER_FROM_SELECTED,
        payload: selectedWithoutBorder
    }
}

export function deleteFillFromSelected(selectedWithoutBC){
    return {
        type: DELETE_FILL_FROM_SELECTED,
        payload: selectedWithoutBC
    }
}

export function addFillToSelected(selectedWithBC){
    return {
        type: ADD_FILL_TO_SELECTED,
        payload:  selectedWithBC
    }
}

export default function reducer(state = initialState, action){
    let {type, payload} = action;
    switch(type){
        
        case ADD_SELECTED :
        return Object.assign({}, state, {selected: payload});

        case ADD_SHAPE_TO_ARRAY + '_FULFILLED' :
        return Object.assign({}, state, {shapes: payload})

        case ADD_FILL_TO_SELECTED :
        return Object.assign({}, state, {selected: payload})

        case DELETE_FILL_FROM_SELECTED :
        return Object.assign({}, state, {selected: payload})

        case DELETE_BORDER_FROM_SELECTED :
        return Object.assign({}, state, {selected: payload})

        case UPDATE_FILL_ON_SELECTED :
        return Object.assign({}, state, {selected: payload})

        case ADD_BORDER_ON_SELECTED :
        return Object.assign({}, state, {selected: payload})

        case UPDATE_BORDER_ON_SELECTED :
        return Object.assign({}, state, {selected: payload})

        case ADD_SHADOW_ON_SELECTED : 
        return Object.assign({}, state, {selected: payload})

        case DELETE_SHADOW_ON_SELECTED : 
        return Object.assign({}, state, {selected: payload})

        case UPDATE_SHADOW_ON_SELECTED : 
        return Object.assign({}, state, {selected: payload})

        case ADD_BLUR_ON_SELECTED : 
        return Object.assign({}, state, {selected: payload})

        case DELETE_BLUR_ON_SELECTED : 
        return Object.assign({}, state, {selected: payload})

        case UPDATE_BLUR_ON_SELECTED :
        return Object.assign({}, state, {selected: payload})

        case UPDATE_OPACITY_ON_SELECTED : 
        return Object.assign({}, state, {selected: payload})

        case UPDATE_POSITION_ON_SELECTED :
        return Object.assign({}, state, {selected: payload})

        case UPDATE_SIZE_ON_SELECTED :
        return Object.assign({}, state, {selected: payload})

        case UPDATE_ROTATE_ON_SELECTED :
        return Object.assign({}, state, {selected: payload})

        case UPDATE_ZINDEX_ON_SELECTED :
        return Object.assign({}, state, {selected: payload})

        default :
        return state
       
    }
}