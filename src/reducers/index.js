import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import AuthReducer from './AuthReducer';

export default combineReducers({
    router: routerReducer,
    user: AuthReducer,
});