import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import AuthReducer from './AuthReducer';
import CategoryReducer from './CategoryReducer';
import ProductReducer from './ProductReducer';
import LanguageReducer from './LanguageReducer';
import CardReducer from './CardReducer';
import ShippingReducer from './ShippingReducer';
import BillingReducer from './BillingReducer';

export default combineReducers({
    router: routerReducer,
    user: AuthReducer,
    category: CategoryReducer,
    products: ProductReducer,
    language: LanguageReducer,
    card: CardReducer,
    shipping: ShippingReducer,
    billing: BillingReducer,
});