import {createStore, applyMiddleware} from 'redux';
import reducer from './ducks/index';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk'

let middleware = promiseMiddleware();

export default createStore(reducer, applyMiddleware(middleware), applyMiddleware(thunk));