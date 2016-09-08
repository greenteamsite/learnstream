import * as userProfileActions from './userProfileActions';
import * as localesActions from './localesActions';
import * as settingsActions from './settingsActions';

export function loadApp() {
  return dispatch => {
    // TODO: Add local determination
    dispatch(localesActions.getLocales('uk'));
     // TODO: Add function for getting current login
    dispatch(userProfileActions.getUserProfile('mark'));

    dispatch(settingsActions.getSettingsSuccess({
      defaultLang: 'uk',
      supportedLangs: [
        { name: 'українська', value: 'uk' },
        { name: 'english', value: 'en' },
      ],
    }));
  };
}
