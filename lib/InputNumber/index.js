"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/input-number/style");

var _inputNumber = _interopRequireDefault(require("antd/lib/input-number"));

var _react = _interopRequireDefault(require("react"));

var _FormItem = require("../FormItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChaosInputNumber = function ChaosInputNumber(props) {
  return _react.default.createElement(_inputNumber.default, Object.assign({}, props));
};

var _default = (0, _FormItem.WrapFormItem)(ChaosInputNumber, {
  defaultDetailType: 'text'
});

exports.default = _default;