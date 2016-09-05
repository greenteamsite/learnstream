import { combineReducers } from 'redux';
import localesReducer from './localesReducer';
import homePageReducer from './homePageReducer';
import dashboardPageReducer from './dashboardPageReducer';
import unitReducer from './unitReducer';
import userProfileReducer from './userProfileReducer';
import settingsReducer from './settingsReducer';
import moduleReducer from './moduleReducer';

const rootReducer = combineReducers({
  locales: localesReducer,
  settings: settingsReducer,
  homePageInfo: homePageReducer,
  userProfile: userProfileReducer,
  dashboardPageInfo: dashboardPageReducer,
  currentUnit: unitReducer,
  currentModule: moduleReducer,
});

export default rootReducer;
