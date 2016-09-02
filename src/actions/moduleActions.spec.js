import { expect } from 'chai';
import * as ActionCreators from './moduleActions';
import * as ActionTypes from './actionTypes';

describe('Actions', () => {
  const appState = {
    modules: [{ id: 1, title: 'Test' }],
    currentModule: {
      id: 1,
      title: 'Test',
    },
  };

  it('should create an action to get Module Info by id', () => {
    const expected = {
      type: ActionTypes.MODULES_GET_ITEM_SUCCESS,
      moduleItem: appState.currentModule,
    };
    // Notice use of deep because it's a nested object
    expect(ActionCreators.getModuleItemSuccess(appState.currentModule)).to.deep.equal(expected);
  });
});
