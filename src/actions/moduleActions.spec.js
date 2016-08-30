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

  it('should create an action to get Modules', () => {
    const expected = {
      type: ActionTypes.MODULES_GET_INFO_SUCCESS,
    };
    // Notice use of deep because it's a nested object
    expect(ActionCreators.getModulesSuccess()).to.deep.equal(expected);
  });

  it('should create an action to get Module Info by id', () => {
    const expected = {
      type: ActionTypes.MODULES_GET_ITEM_SUCCESS,
      moduleId: appState.currentModule.id,
    };
    // Notice use of deep because it's a nested object
    expect(ActionCreators.getModuleInfoSuccess(appState.currentModule.id)).to.deep.equal(expected);
  });
});
