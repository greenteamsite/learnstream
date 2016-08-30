import * as ActionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function settingsReducer(state = initialState.settings, action) {
  switch (action.type) {
    case ActionTypes.SETTINGS_GET_SUCCESS: {
      return action.settings;
    }
    default:
      return state;
  }
}
