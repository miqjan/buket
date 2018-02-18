import { SET_LANGUAGE_LOCATION } from '../constants/LanguageConstants';
const initStore = {
    location: 'en',
}
const LanguageReducer = (store = initStore, action) => {
    switch (action.type) {
        case SET_LANGUAGE_LOCATION:
            return Object.assign({},store,{location:action.payload});
        default:
            return store;
    }

}
export default LanguageReducer;