import * as moduleActions from './moduleActions';

import * as ActionTypes from './actionTypes';

export function getDashboardPageInfoSuccess(dashboardPageInfo) {
  return {
    type: ActionTypes.DASHBOARD_GET_INFO_SUCCESS,
    dashboardPageInfo,
  };
}

export function getDashboardPageInfo(lang) {
  return dispatch => {
    // Getting the last module
    dispatch(moduleActions.getLatestModule(lang)).then(() => {
      // Add some additional fields for dashboardPageInfo
      dispatch(getDashboardPageInfoSuccess({}));
    });
  };
}
