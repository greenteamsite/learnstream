import * as ActionTypes from './actionTypes';

export function getSettingsSuccess(settings) {
  return {
    type: ActionTypes.SETTINGS_GET_SUCCESS,
    settings,
  };
}
