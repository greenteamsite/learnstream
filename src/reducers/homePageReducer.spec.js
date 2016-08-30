import { expect } from 'chai';
// import * as ActionTypes from '../actions/actionTypes';
import reducer from './homePageReducer';

describe('Reducers::HomePageReducer', () => {
  function getAppState() {
    return {
      shortInfo: 'Awsome learning stream!',
      advantages: ['1. Be the best', '2. Fast learning', '3. Get success!'],
    };
  }

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getAppState();

    expect(reducer(expected, action)).to.deep.equal(expected);
  });
});
