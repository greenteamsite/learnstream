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

    default:
      return state;
  }
}
