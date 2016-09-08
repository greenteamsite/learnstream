import UserProfileApi from '../api/mockUserProfileApi';
import * as ActionTypes from './actionTypes';
import { getLocales } from './localesActions';

export function changeLangSuccess(lang) {
  return {
    type: ActionTypes.USER_PROFILE_CHANGE_LANG_SUCCESS,
    lang,
  };
}

export function changeLang(lang) {
  return dispatch => {
    dispatch(getLocales(lang)).then(() => {
      dispatch(changeLangSuccess(lang));
    });
  };
}

export function getCurrentModuleId(moduleId) {
  return {
    type: ActionTypes.USER_PROFILE_GET_CURRENT_MODULE_ID,
    moduleId,
  };
}

export function getUserProfileSuccess(userProfile) {
  return {
    type: ActionTypes.USER_PROFILE_GET_SUCCESS,
    userProfile,
  };
}

export function getUserProfile(login) {
  return dispatch => {
    UserProfileApi.getUserProfile(login).then(userProfile => {
      dispatch(getUserProfileSuccess(userProfile));
    }).catch(error => {
      throw (error);
    });
  };
}
