import axios from 'axios';
import Alert from 'react-s-alert';

import { UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_ERROR, UPDATE_PROFILE_LOADING } from '../constants/SettingsConstants';
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