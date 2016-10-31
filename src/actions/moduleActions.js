import ModuleApi from '../api/mockModuleApi';
import * as ActionTypes from './actionTypes';

export function getModuleItemSuccess(moduleItem) {
  return {
    type: ActionTypes.MODULES_GET_ITEM_SUCCESS,
    moduleItem,
  };
}

export function getModuleItem(moduleId, lang) {
  return dispatch => (
    ModuleApi.get(moduleId, lang).then(moduleItem =>
      dispatch(getModuleItemSuccess(moduleItem)))
  );
}


export function getLatestModule(lang) {
  return dispatch => (
    ModuleApi.getLatest(lang).then(moduleItem =>
      dispatch(getModuleItemSuccess(moduleItem)))
  );
}

export function setCurrentUnit(unitIndex) {
  return {
    type: ActionTypes.MODULES_SET_CURRENT_UNIT_ID,
    unitIndex,
  };
}

export function setNextCurrentUnit() {
  return {
    type: ActionTypes.MODULES_SET_NEXT_CURRENT_UNIT_ID,
  };
}
