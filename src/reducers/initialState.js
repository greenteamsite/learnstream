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
    modulePage: {
      title: 'Learning stream',
      btnSubmitLabel: '',
      btnToggleLabel: '',
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
  currentModule: {
    id: 0,
    title: '',
    subtitle: '',
    roleIds: [],
    currentUnitId: 0,
    currentUnitToggled: false,
    units: [
      {
        id: 0,
        passed: false,
        title: '',
        subtitle: '',
        pictureUrl: '',
        info: '',
        sections: [],
        tests: [
          {
            question: {
              title: '',
              subtitle: '',
              info: '',
              score: 0,
              answerId: 0,
            },
            answers: [],
          },
        ],
      },
    ],
  },
};
