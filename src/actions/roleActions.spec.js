import { expect } from 'chai';
import getRolesSuccess from './roleActions';
import * as ActionTypes from './actionTypes';

describe('Actions', () => {
  const appState = {
    roles: [{ id: 1, title: 'Front-End' }],
  };

  it('should create an action to get Roles', () => {
    const expected = {
      type: ActionTypes.ROLES_GET_INFO_SUCCESS,
    };
    // Notice use of deep because it's a nested object
    expect(getRolesSuccess(appState)).to.deep.equal(expected);
  });
});
