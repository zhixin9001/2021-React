import { createStore, combineReducers } from 'redux';
import { reducer as todoReducer } from './todos';
import { reducer as filterReducer } from './filter';

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

const storeEnhancers = 
  (window && window.devToolsExtension) ? window.devToolsExtension() : (f) => f;

export default createStore(reducer, {}, storeEnhancers);