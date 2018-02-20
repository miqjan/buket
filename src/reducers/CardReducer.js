import { SET_PRODUCT, REMOVE_PRODUCT } from '../constants/CardConstants';
const initStore = {
    isTemporary: true,
    products: [],
}
const CardReducer = (store = initStore, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return Object.assign({},store,{products: action.payload});
        case REMOVE_PRODUCT:
            return Object.assign({},store,{products: action.payload});
        default:
            return store;
    }

}
export default CardReducer;