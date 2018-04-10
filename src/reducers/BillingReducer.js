import { GET_SELECTED_PRICE, CHARGE_ERROR, CHARGE_SUCCESS } from '../constants/BillingConstants';
const initStore = {
    price: 0,
    data: "",
    success: false,
    error: false,
}
const BillingReducer = (store = initStore, action) => {
    switch (action.type) {
        case GET_SELECTED_PRICE:
            return Object.assign({},store,{price:action.payload.data});
        case CHARGE_ERROR:
            return Object.assign({},store,{error: payload.error, data: payload.data});
        case CHARGE_SUCCESS:
            return Object.assign({},store,{error: payload.error, data: payload.data, success: true});
        default:
            return store;
    }
}
export default BillingReducer;