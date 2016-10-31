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
    currentUnitIndex: 0,
    currentUnitToggled: false,
    units: [
      {
        id: 0,
        passed: false,
        title: '',
        subtitle: '',
        info: '',
        pictureUrl: '',
        sections: [
          {
            pictureUrl: '',
            code: '',
            title: '',
            subtitle: '',
            info: '',
            codeTitle: '',
          },
        ],
        tests: [
          {
            question: {
              id: 0,
              score: 0,
              answerId: 0,
              code: '',
              title: '',
              subtitle: '',
              info: '',
              codeTitle: '',
            },
            answers: [
              {
                id: 0,
                isCorrect: false,
                code: '',
                title: '',
                subtitle: '',
                info: '',
                codeTitle: '',
              },
            ],
          },
        ],
      },
    ],
  },
};
