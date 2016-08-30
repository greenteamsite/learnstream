import { expect } from 'chai';
// import * as ActionTypes from '../actions/actionTypes';
import reducer from './unitPageReducer';

describe('Reducers::unitPageReducer', () => {
  function getAppState() {
    return {
      id: 2,
      title: 'test',
      subtitle: 'test',
      pictureUrl: 'test',
      shortInfo: 'test',
      examples: ['test'],
    };
  }

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getAppState();

    expect(reducer(expected, action)).to.deep.equal(expected);
  });
});
