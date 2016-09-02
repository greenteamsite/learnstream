import ModuleApi from '../api/mockModuleApi';
import * as ActionTypes from './actionTypes';

export function getModuleItemSuccess(moduleItem) {
  return {
    type: ActionTypes.MODULES_GET_ITEM_SUCCESS,
    moduleItem,
  };
}

export function getModuleItem(moduleId) {
  return dispatch => {
    ModuleApi.get(moduleId).then(moduleItem => {
      dispatch(getModuleItemSuccess(moduleItem));
    }).catch(error => {
      throw (error);
    });
  };
}
