import * as ActionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function userProfileReducer(state = initialState.userProfile, action) {
  switch (action.type) {
    case ActionTypes.USER_PROFILE_GET_SUCCESS: {
      return action.userProfile;
    }

    case ActionTypes.USER_PROFILE_CHANGE_LANG: {
      const newState = Object.assign({}, state);
      newState.lang = action.lang;
      return newState;
    }

    default:
      return state;
  }
}
