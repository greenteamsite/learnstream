import * as ActionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function moduleReducer(state = initialState.currentModule, action) {
  switch (action.type) {
    case ActionTypes.MODULES_GET_ITEM_SUCCESS:
      return action.moduleItem;

    case ActionTypes.MODULES_SET_CURRENT_UNIT_ID: {
      const newState = Object.assign({}, state);
      newState.currentUnitId = action.answers;
      return newState;
    }

    case ActionTypes.MODULES_TOGGLE_CURRENT_UNIT_TO_TEST: {
      const newState = Object.assign({}, state);
      newState.currentUnitToggled = true;
      return newState;
    }

    default:
      return state;
  }
}
