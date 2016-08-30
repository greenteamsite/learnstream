import LocalesApi from '../api/mockLocalesApi';
import * as ActionTypes from './actionTypes';

export function getLocalesSuccess(locales) {
  return {
    type: ActionTypes.LOCALES_GET_INFO_SUCCESS,
    locales,
  };
}

export function getLocales(lang) {
  return dispatch => {
    LocalesApi.getLocales(lang).then(locales => {
      dispatch(getLocalesSuccess(locales));
    }).catch(error => {
      throw (error);
    });
  };
}
