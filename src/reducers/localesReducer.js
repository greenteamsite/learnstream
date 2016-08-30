import * as ActionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function localesReducer(state = initialState.locales, action) {
  switch (action.type) {
    case ActionTypes.LOCALES_GET_INFO_SUCCESS:
      return action.locales;

    default:
      return state;
  }
}
