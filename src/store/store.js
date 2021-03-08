import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { blogStore } from './blog/store';
import { navReducer } from './nav/nav';

const globalReducer = combineReducers({
    blogStore,
    nav: navReducer
});

export default createStore(globalReducer, applyMiddleware(thunkMiddleware, createLogger()));