import {GET_CATEGORY_SUCCESS,GET_CATEGORY_ERORR,GET_CATEGORY_LOADING} from '../constants/CategoryConstants';
const initStore = {
    
    data : null,
    error : null, 
    loading: true,
  
}
const CategoryReducer = (store = initStore, action) => {
    switch (action.type) {
        case GET_CATEGORY_LOADING:
            return Object.assign({},store,{loading:action.payload});
        case GET_CATEGORY_SUCCESS:
            return Object.assign({},store,{data:action.payload.data, error: null,});
        case GET_CATEGORY_ERORR:
            return Object.assign({},store,{error:action.payload, data : null});
        default:
            return store;
    }

}
export default CategoryReducer;