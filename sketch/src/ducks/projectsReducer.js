import axios from 'axios';

const initialState = {
    projects: [],
    selectedProject: {}
};

const GET_PROJECTS = 'GET_PROJECTS';

export default (state = initialState, action) => {
    const { payload } = action;

    switch(action.type){

        case GET_PROJECTS + '_FULFILLED':
        return Object.assign( {}, state, {projects: payload});

        default: return state;
    }
};

export function getProjects(){
    const promise = axios.get('/sketchpads/all').then(response => 
    response.data )
    return {
        type: GET_PROJECTS,
        payload: promise
    }
}