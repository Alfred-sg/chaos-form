"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _FormItem = require("../FormItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChaosInputNumber = function ChaosInputNumber(props) {
  return _react.default.createElement(_antd.InputNumber, Object.assign({}, props));
};

var _default = (0, _FormItem.WrapFormItem)(ChaosInputNumber, {
  defaultDetailType: 'text'
});

exports.default = _default;