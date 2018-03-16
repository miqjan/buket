import axios from 'axios';
import Alert from 'react-s-alert';

import {SIGN_IN_SUCCESS,SIGN_IN_ERORR,SIGN_IN_LOADING,SIGN_UP_SUCCESS,SIGN_UP_ERORR,
    SIGN_OUT_ERORR,SIGN_OUT_SUCCESS} from '../constants/AuthConstants';
import config from '../../config/index.json';
function SignInErorr(error) {
    return {
        type: SIGN_IN_ERORR,
        payload : error,
    };
}
function SignInSuccess(user) {
    
    return {
        type: SIGN_IN_SUCCESS,
        payload: user,
    };
}
function SignOutErorr(error) {
    return {
        type: SIGN_OUT_ERORR,
        payload : error,
    };
}
function SignOutSuccess(message) {
    
    return {
        type: SIGN_OUT_SUCCESS,
        payload: {message: message},
    };
}
function SignInLoading(loading) {
    return {
        type: SIGN_IN_LOADING,
        payload: loading,
    };
}
export function IsSignIn(email,password) {
    return async( dispatch ) => {
        dispatch(SignInLoading(true));
        try {
            let res = await axios.get(config.api_url+"auth/is-sign-in", {
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            });
            dispatch(SignInSuccess(res.data));
        } catch (error) {
            dispatch(SignInErorr({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status,
                message: error.response.data.message,
            }));
        } finally {
            dispatch(SignInLoading(false));
        }
    };
}

export function SignIn(email, password) {
    return async(dispatch) => {
        try {
            dispatch(SignInLoading(true));
            let res = await axios.post(config.api_url+"auth/sign-in", {
                email: email,
                password: password,
            }, {
                headers: {
                    'Authorization': window.localStorage.getItem('token'),
                }
            });
            Alert.success(res.data.message);
            dispatch(SignInSuccess(res.data));
            window.localStorage.setItem('token',res.data.data.token);
        } catch (error) {
            if(error.response.status === 400) {
                Alert.error(error.response.data.errors[0].msg);
            } else {
                Alert.error(error.response.data.message);
            }
            
            dispatch(SignInErorr({
                status_text: error.response.statusText,
                data: error.response.data.error || error.response.data.errors,
                status: error.response.status,
                message : error.response.data.message,
            }));
        } finally {
            dispatch(SignInLoading(false));
        }
    };
}
export function SignOut() {
    return async(dispatch) => {
        try{
            dispatch(SignInLoading(true));
            window.localStorage.clear();
            dispatch(SignOutSuccess("User successfully signOut"));
            Alert.success("User successfully signOut");
        } catch(error) {
            dispatch(SignOutErorr(error));
        } finally {
            dispatch(SignInLoading(false));
        }
    };
    
}