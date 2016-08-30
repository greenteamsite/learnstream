import * as ActionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function dashboardPageReducer(state = initialState.dashboardPageInfo, action) {
  switch (action.type) {
    case ActionTypes.DASHBOARD_GET_INFO_SUCCESS:
      return action.dashboardPageInfo;

    default:
      return state;
  }
}
