import * as Crypto from "crypto-js";

export default store => next => action => {
    next(action);
    const state = store.getState();
    let toSave = Object.keys(state)
                                .filter( ( key ) => !state[key].isTemporary )
                                .reduce( (res, key) => Object.assign(res, { [key]: state[key] }), {})
    let jsonState = JSON.stringify(toSave);
    let encodedState = Crypto.AES.encrypt(jsonState, "sicret").toString();
    localStorage.setItem("ukil", encodedState);
}