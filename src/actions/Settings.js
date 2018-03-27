import axios from 'axios';
import Alert from 'react-s-alert';

import { UPDATE_PROFILE_SUCCESS, 
    UPDATE_PROFILE_ERROR, 
    UPDATE_PROFILE_LOADING,
    GET_DELIVERYBOOK_ERROR,
    GET_DELIVERYBOOK_SUCCESS } from '../constants/SettingsConstants';
import config from '../../config/index.json';

function UpdateProfileError(error) {
    return {
        type: UPDATE_PROFILE_ERROR,
        payload : error,
    };
}
function UpdateProfileSuccess(updated) {
    
    return {
        type: UPDATE_PROFILE_SUCCESS,
        payload: updated,
    };
}
function UpdateProfileLoading(loading) {
    return {
        type: UPDATE_PROFILE_LOADING,
        payload: loading,
    };
}
function getDeliveryBookSuccess(response){
    return {
        type: GET_DELIVERYBOOK_SUCCESS,
        payload: response,
    };
}
function getDeliveryBookError(error){
    return {
        type: GET_DELIVERYBOOK_ERROR,
        payload: error,
    };
}
export function UpdateProfile(object) {
    return async( dispatch,  ) => {
        //dispatch(UpdateProfileLoading(true));
        try {
            let res = await axios.put(config.api_url+"user", object, {
                headers: {
                    'Authorization': window.localStorage.getItem('token'),
                }
            });
            dispatch(UpdateProfileSuccess(res.data.data));
            Alert.success("Profile successfully updated");
        } catch (error) {
            dispatch(UpdateProfileError({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status,
                message: error.response.data.message,
            }));
            Alert.error(error.response.data.errors[0].message); //must fix 
        } finally {
           // dispatch(UpdateProfileLoading(false));
        }
    };
};
export function getDeliveryBook() {
    return async( dispatch ) => {
        //dispatch(UpdateProfileLoading(true));
        try {
            let res = await axios.get(config.api_url+"user/delivery", {
                headers: {
                    'Authorization': window.localStorage.getItem('token'),
                }
            });
            dispatch(getDeliveryBookSuccess(res.data.data.delivery_book));
        } catch (error) {
            console.log(error);
            dispatch(getDeliveryBookError({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status,
                message: error.response.data.message,
            }));
            Alert.error(error.response.data.errors[0].message); //must fix 
        } finally {
           // dispatch(UpdateProfileLoading(false));
        }
    };
};
export function addDeliveryBook(object){
    return async( dispatch ) => {
        //dispatch(UpdateProfileLoading(true));
        try {
            let res = await axios.post(config.api_url+"user/delivery",object,{
                headers: {
                    'Authorization': window.localStorage.getItem('token'),
                }
            });
            dispatch(getDeliveryBookSuccess(res.data.data.delivery_book));
        } catch (error) {
            console.log(error);
            dispatch(getDeliveryBookError({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status,
                message: error.response.data.message,
            }));
            Alert.error(error.response.data.errors[0].message); //must fix 
        } finally {
           // dispatch(UpdateProfileLoading(false));
        }
    };
};
export function updateDeliveryBook(object){
    return async( dispatch ) => {
        //dispatch(UpdateProfileLoading(true));
        try {
            const id = object._id;
            delete object._id;
            let res = await axios.put(config.api_url+"user/delivery/"+id,object,{
                headers: {
                    'Authorization': window.localStorage.getItem('token'),
                }
            });
            dispatch(getDeliveryBookSuccess(res.data.data.delivery_book));
        } catch (error) {
            console.log(error);
            dispatch(getDeliveryBookError({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status,
                message: error.response.data.message,
            }));
            Alert.error(error.response.data.errors[0].message); //must fix 
        } finally {
           // dispatch(UpdateProfileLoading(false));
        }
    };
};
export function deleteDeliveryBook(id){
    return async( dispatch ) => {
        //dispatch(UpdateProfileLoading(true));
        try {
            let res = await axios.delete(config.api_url+"user/delivery/"+id,{
                headers: {
                    'Authorization': window.localStorage.getItem('token'),
                }
            });
            dispatch(getDeliveryBookSuccess(res.data.data.delivery_book));
        } catch (error) {
            console.log(error);
            dispatch(getDeliveryBookError({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status,
                message: error.response.data.message,
            }));
            Alert.error(error.response.data.errors[0].message); //must fix 
        } finally {
           // dispatch(UpdateProfileLoading(false));
        }
    };
};