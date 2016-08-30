import HomePageApi from '../api/mockHomePageApi';
import * as ActionTypes from './actionTypes';

export function getHomePageInfoSuccess(homePageInfo) {
  return {
    type: ActionTypes.HOME_GET_INFO_SUCCESS,
    homePageInfo,
  };
}

export function getHomePageInfo() {
  return dispatch =>
    HomePageApi.getHomePageInfo().then(homePageInfo => {
      dispatch(getHomePageInfoSuccess(homePageInfo));
    }).catch(error => {
      throw (error);
    });
}
