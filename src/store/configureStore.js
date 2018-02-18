import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import localStorageDump from './localStorageDump';
import rootReducer from '../reducers';
import * as Crypto from 'crypto-js';

export const history = createHistory({
  basename: '',
  forceRefresh: false,
  keyLength: 6,
  getUserConfirmation: (message, callback) => callback(window.confirm(message))
});

const middleware = routerMiddleware(history);


let array_middleware = [];
array_middleware.push(thunk);
array_middleware.push(middleware);
array_middleware.push(localStorageDump);


function getcompose() {
  if(process.env.NODE_ENV.trim() !== 'production'){
    return composeWithDevTools(applyMiddleware(...array_middleware));
  } else {
    return applyMiddleware(...array_middleware);
  }
}

let initialState = {};
const storeEncoded = localStorage.getItem("ukil");
if(storeEncoded){
  const storeJson = Crypto.AES.decrypt(storeEncoded.toString(), "sicret");
  initialState = JSON.parse(storeJson.toString(Crypto.enc.Utf8));
}
else{
  initialState = {}
}

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    getcompose(),
  );
};