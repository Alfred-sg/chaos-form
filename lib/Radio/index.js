"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/radio/style");

var _radio = _interopRequireDefault(require("antd/lib/radio"));

var _react = _interopRequireDefault(require("react"));

var _useOptions2 = _interopRequireDefault(require("../hooks/useOptions"));

var _FormItem = require("../FormItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ChaosRadio = function ChaosRadio(_ref) {
  var optionsProp = _ref.options,
      rest = _objectWithoutProperties(_ref, ["options"]);

  var _useOptions = (0, _useOptions2.default)(optionsProp),
      options = _useOptions.options;

  return _react.default.createElement(_radio.default.Group, Object.assign({}, rest, {
    options: options
  }));
};

var _default = (0, _FormItem.WrapFormItem)(ChaosRadio, {
  defaultDetailType: 'text'
});

exports.default = _default;