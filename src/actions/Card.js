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

export function removeItem (store, id){
    return async( dispatch, getState ) => {
        const { card: { products: store }} = getState();
        const index = store.findIndex(x => x.id === id);
        if (index > -1) {
            store.splice(index, 1);
        }
        dispatch(RemoveProductFromCard(store));
    };
}
export function addItem (id) {
    return async( dispatch, getState ) => {
        const { card: { products: store }} = getState();
        const index = store.findIndex(x => x.id === id);
        if(index > -1){
            store[index].count++;
            dispatch(SetProductToCard(store));
        } else {
            store.push({ id, count: 1 });
            dispatch(SetProductToCard(store));
        }
    };
}
