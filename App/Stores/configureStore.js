import { createStore, combineReducers } from 'redux';
import reducer from '../Reducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const rootReducer = combineReducers(
    { MobileListReducer: reducer }
);
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}
export default configureStore;