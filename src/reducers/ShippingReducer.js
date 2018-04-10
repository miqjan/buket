import { GET_REGIONS_ERORR, GET_REGIONS_LOADING, GET_REGIONS_SUCCESS, SET_SELECTED } from '../constants/ShippingConstants';
const initStore = {
    regions : [],
    select: null,
    error : null, 
    loading: false,
}
const ShippingReducer = (store = initStore, action) => {
    switch (action.type) {
        case GET_REGIONS_LOADING:
            return Object.assign({},store,{loading:action.payload});
        case GET_REGIONS_SUCCESS:
            return Object.assign({},store,{regions:action.payload.data});
        case GET_REGIONS_ERORR:
            return Object.assign({},store,{error:action.payload, data : store.regions});
        case SET_SELECTED:
            return Object.assign({},store,{select:action.payload});
        default:
            return store;
    }

}
export default ShippingReducer;