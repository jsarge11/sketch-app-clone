import axios from 'axios';

const initialState = {
    projects: [],
    selectedProject: null,
    elements: []
};

const GET_PROJECTS = 'GET_PROJECTS';
const ADD_PROJECT = 'ADD_PROJECT';
const DELETE_PROJECT = 'DELETE_PROJECT';
const EDIT_PROJECT = 'EDIT_PROJECT';
const SET_SELECTED = 'SET_SELECTED';
const GET_ELEMENTS = 'GET_ELEMENTS';
const RENAME_ELEMENT = 'RENAME_ELEMENT';
const DELETE_ELEMENT = 'DELETE_ELEMENT';
const RESET_SELECTED = 'RESET_SELECTED';

export default (state = initialState, action) => {
    const { payload } = action;

    switch(action.type){

        case RESET_SELECTED:
        return Object.assign({}, state, {selectedProject: payload})

        case DELETE_ELEMENT + '_FULFILLED':
        return Object.assign({}, state, {elements: payload});

        case RENAME_ELEMENT + '_FULFILLED':
        return Object.assign({}, state, {elements: payload});

        case GET_ELEMENTS + '_FULFILLED':
        return Object.assign({}, state, {elements: payload});

        case GET_PROJECTS + '_FULFILLED':
        return Object.assign( {}, state, {projects: payload});

        case ADD_PROJECT + '_FULFILLED':
        return Object.assign( {}, state , { projects: payload});
        
        case DELETE_PROJECT + '_FULFILLED':
        return Object.assign({}, state, { projects: payload});

        case EDIT_PROJECT + '_FULFILLED':
        return Object.assign({}, state, {projects: payload});

        case SET_SELECTED: 
        return Object.assign({}, state, { selectedProject: payload});



        default: return state;
    }
};

export function resetSelected(){
    return {
        type: RESET_SELECTED,
        payload: null
    }
}

export function deleteElement(id, pad){
    const promise = axios.delete(`/sketchpads/${id}/${pad}`).then(response => 
    response.data)
    return {
        type: DELETE_ELEMENT,
        payload: promise
    }
}

export function renameElement(id, name, pad){
    const promise = axios.put(`/sketchpads/${id}/${name}/${pad}`).then(response => 
    response.data)
    return {
        type: RENAME_ELEMENT,
        payload: promise
    }
};

export function getElements(id){
    const promise = axios.get(`/sketchpads/${id}/elements`).then(response => 
    response.data)
    return {
        type: GET_ELEMENTS,
        payload: promise
    }
}

export function getProjects(){
    const promise = axios.get('/sketchpads/all').then(response => 
    response.data )
    return {
        type: GET_PROJECTS,
        payload: promise
    }
};

export function addProject(obj){
    const promise = axios.post('/sketchpads', obj).then(response => 
    response.data)
    return {
        type: ADD_PROJECT,
        payload: promise
    } 
};

export function deleteProject(id){
    
    const promise = axios.delete(`/sketchpads/${id}` ).then(response =>
    response.data)
    return{
        type: DELETE_PROJECT,
        payload: promise
    }
};

export function editProject(id, obj){
    const promise = axios.put(`/sketchpads/${id}`, obj).then(response => 
    response.data)
    return {
        type: EDIT_PROJECT,
        payload: promise
    }
};

export function selectedProject(id){
    console.log("id", id)
    return {
        type: SET_SELECTED,
        payload: id
    }
}