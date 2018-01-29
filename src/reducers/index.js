import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import AuthReducer from './AuthReducer';
import CategoryReducer from './CategoryReducer';

export default combineReducers({
    router: routerReducer,
    user: AuthReducer,
    category : CategoryReducer,
});