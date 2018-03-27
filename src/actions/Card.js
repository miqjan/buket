import Alert from 'react-s-alert';
import { SET_PRODUCT, REMOVE_PRODUCT } from '../constants/CardConstants';
import config from '../../config/index.json';

function SetProductToCard(array) {
    return {
        type: SET_PRODUCT,
        payload : array,
    };
}
function RemoveProductFromCard(array) {
    return {
        type: REMOVE_PRODUCT,
        payload: array,
    };
}
export function incrementCount (id){
    return async( dispatch, getState ) => {
        const { card: { products: store }} = getState();
        const index = store.findIndex(x => x.id === id);
        if((index > -1) && (store[index].count < 5)){
            store[index].count++;
            dispatch(SetProductToCard(store));
        }
    };
}
export function decrementCount (id){
    return async( dispatch, getState ) => {
        const { card: { products: store }} = getState();
        const index = store.findIndex(x => x.id === id);
        if((index > -1) && (store[index].count > 1)){
            store[index].count--;
            dispatch(SetProductToCard(store));
        }
    };
}
export function removeItem (id){
    return async( dispatch, getState ) => {
        const { card: { products: store }} = getState();
        const index = store.findIndex(x => x.id === id);
        if (index > -1) {
            store.splice(index, 1);
        }
        dispatch(RemoveProductFromCard(store));
    };
}
export function addItem (id, imgUrl, price, name) {
    return async( dispatch, getState ) => {
        const { card: { products: store }} = getState();
        const index = store.findIndex(x => x.id === id);
        if(index > -1){
            if(store[index].count < 5)
            {   
                store[index].count++;
                dispatch(SetProductToCard(store));
                Alert.success("Product added successfuly");
            } else {
                Alert.warning("The product count cant be more then 5");
            }
        } else {
            console.log()
            store.push({ id, count: 1, imgUrl: imgUrl, price: price , name: JSON.parse(name)});
            dispatch(SetProductToCard(store));
            Alert.success("Product added successfuly");
        }
    };
}
