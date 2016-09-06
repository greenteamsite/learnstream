export default {
  settings: {
    defaultLang: '',
    supportedLangs: [],
  },
  locales: {
    homePage: {
      title: 'Learning stream',
    },
    dashboardPage: {
      title: 'Learning stream',
    },
    userProfilePage: {
      title: 'Learning stream',
    },
    unitPage: {
      title: 'Learning stream',
      btnSubmitLabel: 'Submit',
    },
  },
  userProfile: {
    lang: '',
    nickname: '',
    level: '',
    score: 0,
    roles: [],
  },
  homePageInfo: {
    pictureUrl: '',
    shortInfo: '',
    advantages: [],
  },
  dashboardPageInfo: {
    roles: [{ id: 0, title: '' }],
  },
  modules: [{ id: 0, title: '' }],
  currentUnit: {
    id: 0,
    title: '',
    subtitle: '',
    info: '',
    sections: [
      {
        title: '',
        subtitle: '',
        pictureUrl: '',
        info: '',
        examples: [
          {
            description: '',
            code: '',
          },
        ],
      },
    ],
    tests: [
      {
        question: { text: '', score: 0 },
        answers: [{ text: '', isCorrect: false }],
      },
    ],
  },
  currentModule: {
    id: 0,
    title: '',
    subtitle: '',
    roleIds: [],
    currentUnitId: 0,
    units: [
      {
        id: 0,
        passed: false,
        title: '',
        subtitle: '',
        pictureUrl: '',
        shortInfo: '',
        info: '',
        examples: [],
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
