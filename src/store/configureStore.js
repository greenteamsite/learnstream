import confStorePr from './configureStore.prod';
import confStoreDev from './configureStore.dev';

if (process.env.NODE_ENV === 'production') {
  module.exports = confStorePr;
} else {
  module.exports = confStoreDev;
}
