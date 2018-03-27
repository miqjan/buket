import axios from 'axios';


import { GET_REGIONS_SUCCESS, GET_REGIONS_ERORR, GET_REGIONS_LOADING } from '../constants/ShippingConstants';
import config from '../../config/index.json';

function GetRegionsError(error) {
    return {
        type: GET_REGIONS_ERORR,
        payload : error,
    };
}
function GetRegionsSuccess(category) {
    
    return {
        type: GET_REGIONS_SUCCESS,
        payload: category,
    };
}
function GetRegionsLoading(loading) {
    return {
        type: GET_REGIONS_LOADING,
        payload: loading,
    };
}
export function getRegions() {
    return async( dispatch ) => {
        dispatch(GetRegionsLoading(true));
        try {
            let res = await axios.get(config.api_url+"shipping/region",{
                headers: {
                    'Authorization': window.localStorage.getItem('token'),
                }
            });
            dispatch(GetRegionsSuccess(res.data));
        } catch (error) {
            dispatch(GetRegionsError({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status,
                message: error.response.data.message,
            }));
        } finally {
            dispatch(GetRegionsLoading(false));
        }
    };
};