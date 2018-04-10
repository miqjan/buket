import axios from 'axios';
//import Alert from 'react-s-alert';
import { GET_SELECTED_PRICE, CHARGE_ERROR, CHARGE_SUCCESS } from '../constants/BillingConstants';
import config from '../../config/index.json';

export function getSelectedPrice() {
    return async( dispatch, getState ) => {
        try {
            const { card: { products }, shipping: {select: {region: shipping}}} = getState();
            const res = await axios.post(config.api_url+"billing/get", {products,shipping,}, {
                headers: {
                    'Authorization': window.localStorage.getItem('token'),
                }
            });
            dispatch(setSelectedPrice(res.data));
        } catch (error) {
            Alert.error(error.response.data.message);
        }
    };
};
export function SendChargeObject(token) {
    return async( dispatch, getState ) => {
        try {
            const { card: { products }, shipping: {select: shipping}} = getState();
            const res = await axios.post(config.api_url+"billing", {products,shipping,token}, {
                headers: {
                    'Authorization': window.localStorage.getItem('token'),
                }
            });
            dispatch(successCharge(res.data.data));
        } catch (error) {
            dispatch(errorCharge(error.response.data.message));
            Alert.error(error.response.data.message);
        }
    };
};
function setSelectedPrice(object){
    return {
        payload: object,
        type: GET_SELECTED_PRICE,
    }
}
function successCharge(message){
    return {
        payload: {error: false, data: message},
        type: CHARGE_SUCCESS,
    }
}
function errorCharge(message){
    return {
        payload: {error: true, data: message},
        type: CHARGE_ERROR,
    }
}