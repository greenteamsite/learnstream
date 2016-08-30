import DashboardPageApi from '../api/mockDashboardPageApi';
import * as ActionTypes from './actionTypes';

export function getDashboardPageInfoSuccess(dashboardPageInfo) {
  return {
    type: ActionTypes.DASHBOARD_GET_INFO_SUCCESS,
    dashboardPageInfo,
  };
}

export function getDashboardPageInfo() {
  return dispatch =>
    DashboardPageApi.getDashboardPageInfo().then(dashboardPageInfo => {
      dispatch(getDashboardPageInfoSuccess(dashboardPageInfo));
    }).catch(error => {
      throw (error);
    });
}
