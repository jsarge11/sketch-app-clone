const initialState = {
    shapes: [],
    selected: {type: 'square', border: 2, borderColor: '#ba0000', boxShadow: '5px 5px 5px 5px #E30C0C', filter: 'blur(4px)'}
}

const ADD_FILL_TO_SELECTED = 'ADD_FILL_TO_SELECTED';

export function addFillToSelected(backgroundColor){
    console.log(backgroundColor)
    return {
        type: ADD_FILL_TO_SELECTED,
        payload: {backgroundColor: backgroundColor}
    }
}

export default function reducer(state = initialState, action){
    let {type, payload} = action;
    switch(type){
        case ADD_FILL_TO_SELECTED :
     var assigned =  Object.assign({}, state, {selected: payload})
     console.log(assigned);
     return assigned;
       
    }
    return state
}