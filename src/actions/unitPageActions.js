import UnitApi from '../api/mockUnitApi';
import * as ActionTypes from './actionTypes';

export function getUnitPageSuccess(unit) {
  return {
    type: ActionTypes.UNIT_GET_INFO_SUCCESS,
    unit,
  };
}

export function getUnitPage(id) {
  return dispatch => {
    UnitApi.get(id).then(userProfile => {
      dispatch(getUnitPageSuccess(userProfile));
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

