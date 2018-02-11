import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERORR, GET_CATEGORY_LOADING } from '../constants/ProductConstants';
const initStore = {
    
    data : [],
    error : null, 
    loading: false,
    notMore: true,
  
}
const ProductReducer = (store = initStore, action) => {
    switch (action.type) {
        case GET_CATEGORY_LOADING:
            return Object.assign({},store,{loading:action.payload});
        case GET_PRODUCTS_SUCCESS:
            return Object.assign({},store,{data:action.payload.data.products, error: null, notMore:action.payload.data.notMore });
        case GET_PRODUCTS_ERORR:
            return Object.assign({},store,{error:action.payload, data : store.data});
        default:
            return store;
    }

}
export default ProductReducer;