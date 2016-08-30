import { expect } from 'chai';
import * as ActionCreators from './homePageActions';
import * as ActionTypes from './actionTypes';

describe('Actions', () => {
  const appState = {
    shortInfo: 'Awsome learning stream!',
    advantages: ['1. Be the best', '2. Fast learning', '3. Get success!'],
  };

  it('should create an action to get Home page Info', () => {
    const expected = {
      type: ActionTypes.HOME_GET_INFO_SUCCESS,
      homePageInfo: appState,
    };

    expect(ActionCreators.getHomePageInfoSuccess(appState)).to.deep.equal(expected);
  });
});
