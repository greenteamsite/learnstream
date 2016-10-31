import * as ActionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function moduleReducer(state = initialState.currentModule, action) {
  switch (action.type) {
    case ActionTypes.MODULES_GET_ITEM_SUCCESS:
      return action.moduleItem;

    case ActionTypes.MODULES_SET_CURRENT_UNIT_ID: {
      const newState = Object.assign({}, state);
      newState.currentUnitIndex = action.unitIndex;
      return newState;
    }

    case ActionTypes.MODULES_SET_NEXT_CURRENT_UNIT_ID: {
      const newState = Object.assign({}, state);
      const nextIndex = newState.currentUnitIndex + 1;
      if (newState.units.length < nextIndex) {
        newState.currentUnitIndex = nextIndex;
      } else {
        newState.currentUnitToggled = true;
      }
      return newState;
    }

    default:
      return state;
  }
}
