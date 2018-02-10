import axios from 'axios';


import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERORR, GET_PRODUCTS_LOADING } from '../constants/ProductConstants';
import config from '../../config/index.json';

function GetProductsError(error) {
    return {
        type: GET_PRODUCTS_ERORR,
        payload : error,
    };
}
function GetProductsSuccess(category) {
    
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: category,
    };
}
function GetProductsLoading(loading) {
    return {
        type: GET_PRODUCTS_LOADING,
        payload: loading,
    };
}
export function getProducts( categoryId, limit ) {
    return async( dispatch ) => {
        dispatch(GetProductsLoading(true));
        try {
            let res = await axios.get(config.api_url+"products/"+categoryId+"?limit="+limit);
            dispatch(GetProductsSuccess(res.data));
        } catch (error) {
            dispatch(GetProductsError({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status,
                message: error.response.data.message,
            }));
        } finally {
            dispatch(GetProductsLoading(false));
        }
    };
};