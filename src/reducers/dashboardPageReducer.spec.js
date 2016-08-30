import { expect } from 'chai';
// import * as ActionTypes from '../actions/actionTypes';
import reducer from './dashboardPageReducer';

describe('Reducers::dashboardPageReducer', () => {
  function getAppState() {
    return {
      roles: [{ id: 1, title: 'Front-End Developer' }, { id: 1, title: 'Web-API Developer' }],
    };
  }

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getAppState();

    expect(reducer(expected, action)).to.deep.equal(expected);
  });
});
