import delay from './delay';

import localesEn from './fakeData/localesEn.json';
import localesUk from './fakeData/localesUk.json';

class LocalesApi {
  static getLocales(lang) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (lang === 'uk') {
          resolve(Object.assign({}, localesUk));
        } else {
          resolve(Object.assign({}, localesEn));
        }
      }, delay);
    });
  }
}

export default LocalesApi;
