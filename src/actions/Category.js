import axios from 'axios';


import {GET_CATEGORY_SUCCESS,GET_CATEGORY_ERORR,GET_CATEGORY_LOADING} from '../constants/CategoryConstants';
import config from '../../config/index.json';
function GetCategoryError(error) {
    return {
        type: GET_CATEGORY_ERORR,
        payload : error,
    };
}
function GetCategorySuccess(category) {
    
    return {
        type: GET_CATEGORY_SUCCESS,
        payload: category,
    };
}
function GetCategoryLoading(loading) {
    return {
        type: GET_CATEGORY_LOADING,
        payload: loading,
    };
}
export function getCategory() {
    return async( dispatch ) => {
        dispatch(GetCategoryLoading(true));
        try {
            let res = await axios.get(config.api_url+"categories/");
            dispatch(GetCategorySuccess(res.data));
        } catch (error) {
            dispatch(GetCategoryError({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status,
                message: error.response.data.message,
            }));
        } finally {
            dispatch(GetCategoryLoading(false));
        }
    };
};