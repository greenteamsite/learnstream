/* eslint-disable dot-notation */

import delay from './delay';
import modulesData from './fakeData/modules.json';

class ModuleApi {
  static get(id, lang) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (id) {
          const currentModule = modulesData.modules.find((item) => (
            item.id === id
          ));
          let currentLang = 'uk';
          if (lang) {
            currentLang = lang;
          }
          currentModule['title'] = currentModule.resources[currentLang].title;
          currentModule.subtitle = currentModule.resources[currentLang].subtitle;
          delete currentModule.resources;

          for (let i = 0; i < currentModule.units.length; i++) {
            const unit = currentModule.units[i];
            unit.title = unit.resources[currentLang].title;
            unit.subtitle = unit.resources[currentLang].subtitle;
            unit.info = unit.resources[currentLang].info;
            delete unit.resources;
            for (let j = 0; j < currentModule.units[i].sections.length; j++) {
              const section = currentModule.units[i].sections[j];
              section.title = section.resources[currentLang].title;
              section.subtitle = section.resources[currentLang].subtitle;
              section.info = section.resources[currentLang].info;
              section.codeTitle = section.resources[currentLang].codeTitle;
              delete section.resources;
            }

            for (let j = 0; j < currentModule.units[i].tests.length; j++) {
              const test = currentModule.units[i].tests[j];
              test.question.title = test.question.resources[currentLang].title;
              test.question.subtitle = test.question.resources[currentLang].subtitle;
              test.question.info = test.question.resources[currentLang].info;
              test.question.codeTitle = test.question.resources[currentLang].codeTitle;
              delete test.question.resources;

              for (let k = 0; k < test.answers.length; k++) {
                const answer = test.answers[k];
                answer.title = answer.resources[currentLang].title;
                answer.subtitle = answer.resources[currentLang].subtitle;
                answer.info = answer.resources[currentLang].info;
                answer.codeTitle = answer.resources[currentLang].codeTitle;
                delete answer.resources;
              }
            }
          }
          resolve(Object.assign({}, currentModule));
        }
      }, delay);
    });
  }

// Should find first module that have not all passed units
  static getLatest() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, modulesData.modules[0]));
      }, delay);
    });
  }
}

export default ModuleApi;
