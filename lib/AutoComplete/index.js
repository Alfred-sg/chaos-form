"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/auto-complete/style");

var _autoComplete = _interopRequireDefault(require("antd/lib/auto-complete"));

var _react = _interopRequireDefault(require("react"));

var _FormItem = require("../FormItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChaosAutoComplete = function ChaosAutoComplete(props) {
  return _react.default.createElement(_autoComplete.default, Object.assign({}, props));
};

var _default = (0, _FormItem.WrapFormItem)(ChaosAutoComplete, {
  defaultDetailType: 'text'
});

exports.default = _default;