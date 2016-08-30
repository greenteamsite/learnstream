import { expect } from 'chai';
import * as ActionCreators from './dashboardPageActions';
import * as ActionTypes from './actionTypes';

describe('Actions', () => {
  const appState = {
    roles: [{ id: 1, title: 'Front-End Developer' }, { id: 1, title: 'Web-API Developer' }],
    modules: [{ id: 1, title: 'HTML 5 Beginner' }],
    currentModule: {
      id: 1,
      title: 'HTML 5 Beginner',
      roleIds: [1],
      units: [
        {
          id: 1,
          title: 'Overview',
          pictureUrl: '',
          shortInfo: 'Overview HTML5',
          example: '',
          tests: [
            {
              question: { text: '', score: 0 },
              answers: [{ text: '', isCorrect: false }],
            },
          ],
        },
      ],
    },
  };

  it('should create an action to get DashBoard page Info', () => {
    const expected = {
      type: ActionTypes.DASHBOARD_GET_INFO_SUCCESS,
      dashboardPageInfo: appState,
    };

    expect(ActionCreators.getDashboardPageInfoSuccess(appState)).to.deep.equal(expected);
  });
});
