import { expect } from 'chai';
// import * as ActionTypes from '../actions/actionTypes';
import reducer from './userProfileReducer';

describe('Reducers::userProfileReducer', () => {
  function getAppState() {
    return {
      nickname: 'Mark',
      level: '3',
      score: '12',
      roles: ['111', '222'],
    };
  }

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getAppState();

    expect(reducer(expected, action)).to.deep.equal(expected);
  });
});
