import * as ActionTypes from './actionTypes';

export function getModulesSuccess() {
  return {
    type: ActionTypes.MODULES_GET_INFO_SUCCESS,
  };
}

export function getModuleInfoSuccess(moduleId) {
  return {
    type: ActionTypes.MODULES_GET_ITEM_SUCCESS,
    moduleId,
  };
}
