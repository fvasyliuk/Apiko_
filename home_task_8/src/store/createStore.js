import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../modules';

export default createStore(rootReducer, applyMiddleware(thunk));