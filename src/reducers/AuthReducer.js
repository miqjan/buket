import {SIGN_IN_SUCCESS, SIGN_IN_ERORR, SIGN_IN_LOADING, SIGN_UP_SUCCESS, SIGN_UP_ERORR,
    SIGN_OUT_ERORR, SIGN_OUT_SUCCESS} from '../constants/AuthConstants';

const initStore = {
    isSignIn : false,
    data : null,
    error : null, 
    loading: false,
    message: "",
}
const AuthReducer = (store = initStore, action) => {
    switch (action.type) {
        case SIGN_IN_LOADING:
            return Object.assign({},store,{loading:action.payload});
        case SIGN_IN_SUCCESS:
            return Object.assign({},store,{data:action.payload.data, isSignIn: true, error: null, message: action.payload.message});
        case SIGN_IN_ERORR:
            return Object.assign({},store,{error:action.payload, isSignIn: false, message: action.payload.message});
        case SIGN_UP_SUCCESS:
            return;
        case SIGN_UP_ERORR:
            return;
        case SIGN_OUT_ERORR:
            return Object.assign({},store,{error:action.payload, message: action.payload.message});
        case SIGN_OUT_SUCCESS:
            return Object.assign({},store,{isSignIn:false, message: action.payload.message});
        default:
            return store;
    }

}
export default AuthReducer;