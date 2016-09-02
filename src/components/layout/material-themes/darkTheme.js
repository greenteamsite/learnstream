/* eslint-disable no-underscore-dangle*/
import * as _colorManipulator from 'material-ui/utils/colorManipulator';
import * as _colors from 'material-ui/styles/colors';

import * as _spacing from './vars/spacing';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _spacing2 = _interopRequireDefault(_spacing);


exports.default = {
  spacing: _spacing2.default,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: _colors.grey300,
    primary2Color: _colors.grey400,
    primary3Color: _colors.grey600,
    accent1Color: _colors.grey200,
    accent2Color: _colors.grey800,
    accent3Color: _colors.grey100,
    textColor: _colors.fullWhite,
    secondaryTextColor: _colors.lightWhite,
    alternateTextColor: _colors.grey800,
    canvasColor: _colors.grey600,
    borderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
    disabledColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
    pickerHeaderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12),
    clockCircleColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12),
  },
};
