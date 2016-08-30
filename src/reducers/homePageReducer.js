import * as ActionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function homePageReducer(state = initialState.homePageInfo, action) {
  switch (action.type) {
    case ActionTypes.HOME_GET_INFO_SUCCESS:

      // In a real app using Redux, you might use redux-thunk and handle the async call in userProfileActions.js
      return action.homePageInfo;

    default:
      return state;
  }
}
