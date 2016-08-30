import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const homeState = {
  shortInfo: 'Awesome learning stream!',
  advantages: ['1. Be the best', '2. Fast learning', '3. Get success!'],
};

class HomePageApi {
  static getHomePageInfo() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, homeState));
      }, delay);
    });
  }
}

export default HomePageApi;
