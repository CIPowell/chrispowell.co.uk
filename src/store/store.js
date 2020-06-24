const { combineReducers, createStore } = require("redux");
const { blogStore } = require('./blog/store');

const globalReducer = combineReducers({
    blogStore
});

export default createStore(globalReducer);