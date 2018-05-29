import {combineReducers} from 'redux';
import shapes from './shapesReducer';
import projects from './projectsReducer';
import users from './usersReducer';

export default combineReducers({
    shapes: shapes,
    projects: projects,
    users: users
})