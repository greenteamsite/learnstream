import * as ActionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function unitPageReducer(state = initialState.currentUnit, action) {
  switch (action.type) {
    case ActionTypes.UNIT_GET_INFO_SUCCESS:
      return action.unit;

    case ActionTypes.UNIT_SUBMIT: {
      const newState = Object.assign({}, state);
      newState.answers = action.answers;
      return newState;
    }

    default:
      return state;
  }
}
