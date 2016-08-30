import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const userProfile = {
  lang: 'uk',
  nickname: 'Mark',
  level: '3',
  score: 10,
  roles: ['Front-end', 'Back-end'],
};

class UserProfileApi {
  static getUserProfile(nickname) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (nickname) {
          resolve(Object.assign({}, userProfile));
        }
      }, delay);
    });
  }
}

export default UserProfileApi;
