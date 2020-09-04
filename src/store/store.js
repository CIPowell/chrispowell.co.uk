import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { blogStore } from './blog/store';

const globalReducer = combineReducers({
    blogStore
});

export default createStore(globalReducer, applyMiddleware(thunkMiddleware, createLogger()));