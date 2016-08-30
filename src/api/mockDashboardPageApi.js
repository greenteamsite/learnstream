import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const dashboardState = {
  currentCourse: {
    id: 1,
    title: 'HTML5 Introduction',
    currentUnit: {
      id: 1,
      title: 'Basic tags',
    },
  },
  roles: [{ id: 1, title: 'Front-End Developer' },
    { id: 1, title: 'Web-API Developer' }],
};

class DashboardPageApi {
  static getDashboardPageInfo() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, dashboardState));
      }, delay);
    });
  }
}

export default DashboardPageApi;
