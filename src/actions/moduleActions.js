import ModuleApi from '../api/mockModuleApi';
import * as ActionTypes from './actionTypes';

export function getModuleItemSuccess(moduleItem) {
  return {
    type: ActionTypes.MODULES_GET_ITEM_SUCCESS,
    moduleItem,
  };
}

export function getModuleItem(moduleId) {
  return dispatch => (
    ModuleApi.get(moduleId).then(moduleItem =>
      dispatch(getModuleItemSuccess(moduleItem)))
  );
}


export function getLatestModule() {
  return dispatch => (
    ModuleApi.getLatest().then(moduleItem =>
      dispatch(getModuleItemSuccess(moduleItem)))
  );
}

export function setCurrentUnit(unitId) {
  return {
    type: ActionTypes.MODULES_SET_CURRENT_UNIT_ID,
    unitId,
  };
}

export function toggleCurrentUnitToTest() {
  return {
    type: ActionTypes.MODULES_TOGGLE_CURRENT_UNIT_TO_TEST,
  };
}
