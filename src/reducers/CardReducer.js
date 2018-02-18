import { SET_PRODUCT, REMOVE_PRODUCT } from '../constants/ProductConstants';
const initStore = {
    isTemporary: true,
    card: [],
}
const CardReducer = (store = initStore, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return Object.assign({},store,{loading:action.payload});
        case REMOVE_PRODUCT:
            return Object.assign({},store,{data:action.payload.data.products, error: null, notMore:action.payload.data.notMore });
        default:
            return store;
    }

}
export default CardReducer;