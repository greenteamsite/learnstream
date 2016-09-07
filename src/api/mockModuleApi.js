import delay from './delay';
import modulesData from './fakeData/modules.json';

class ModuleApi {
  static get(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (id) {
          const currentModule = modulesData.modules.find((item) => (
            item.id === id
          ));
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
