const initialState = {
    shapes: [],
    selected: {type: 'square', border: 2, borderColor: '#ba0000', boxShadow: '5px 5px 5px 5px #E30C0C', filter: 'blur(4px)'}
}

const ADD_FILL_TO_SELECTED = 'ADD_FILL_TO_SELECTED';
const DELETE_FILL_FROM_SELECTED = 'DELETE_FILL_FROM_SELECTED';
const UPDATE_FILL_ON_SELECTED = 'UPDATE_FILL_ON_SELECTED';
const DELETE_BORDER_FROM_SELECTED = 'DELETE_BORDER_FROM_SELECTED';

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
        case ADD_FILL_TO_SELECTED :
        return Object.assign({}, state, {selected: payload})


        case DELETE_FILL_FROM_SELECTED :
        return Object.assign({}, state, {selected: payload})

        case DELETE_BORDER_FROM_SELECTED :
        return Object.assign({}, state, {selected: payload})

        case UPDATE_FILL_ON_SELECTED :
        return Object.assign({}, state, {selected: payload})

        default :
        return state
       
    }
}