import { combineReducers } from 'redux';
import localesReducer from './localesReducer';
import homePageReducer from './homePageReducer';
import dashboardPageReducer from './dashboardPageReducer';
import unitPageReducer from './unitPageReducer';
import userProfileReducer from './userProfileReducer';
import settingsReducer from './settingsReducer';

const rootReducer = combineReducers({
  locales: localesReducer,
  settings: settingsReducer,
  homePageInfo: homePageReducer,
  userProfile: userProfileReducer,
  dashboardPageInfo: dashboardPageReducer,
  currentUnit: unitPageReducer,
});

export default rootReducer;
