import UnitApi from '../api/mockUnitApi';
import * as ActionTypes from './actionTypes';

export function getUnitSuccess(unit) {
  return {
    type: ActionTypes.UNIT_GET_INFO_SUCCESS,
    unit,
  };
}

export function getUnit(id) {
  return dispatch => {
    UnitApi.get(id).then(unit => {
      dispatch(getUnitSuccess(unit));
    }).catch(error => {
      throw (error);
    });
  };
}

export function submit(answers) {
  return {
    type: ActionTypes.UNIT_SUBMIT,
    answers,
  };
}

