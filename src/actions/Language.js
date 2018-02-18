import { SET_LANGUAGE_LOCATION } from '../constants/LanguageConstants';

export function setLanguage( language ) {
    return async( dispatch ) => {
        dispatch({
            type: SET_LANGUAGE_LOCATION,
            payload: language,
        });
    };
};