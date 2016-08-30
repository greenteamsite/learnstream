import delay from './delay';

const localesEn = {
  homePage: {
    title: 'Learning stream - home',
  },
  dashboardPage: {
    title: 'Learning stream - dashboard',
    startBtnText: 'Start',
    continueBtnText: 'Continue',
  },
  userProfilePage: {
    title: 'Learning stream - user profile',
  },
  unitPage: {
    title: 'Learning stream - unit',
    btnSubmitLabel: 'Submit',
  },
};

class LocalesApi {
  static getLocales(lang) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (lang === 'en') {
          resolve(Object.assign({}, localesEn));
        } else {
          resolve(Object.assign({}, localesEn));
        }
      }, delay);
    });
  }
}

export default LocalesApi;
