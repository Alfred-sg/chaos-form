"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/time-picker/style");

var _timePicker = _interopRequireDefault(require("antd/lib/time-picker"));

var _react = _interopRequireDefault(require("react"));

var _FormItem = require("../FormItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChaosTimePicker = function ChaosTimePicker(props) {
  return _react.default.createElement(_timePicker.default, Object.assign({}, props));
};

var ChaosRangePicker = function ChaosRangePicker(props) {
  return _react.default.createElement(_timePicker.default.RangePicker, Object.assign({}, props));
};

var FinalTimePicker = (0, _FormItem.WrapFormItem)(ChaosTimePicker, {
  defaultDetailType: 'text'
}); // @ts-ignore

FinalTimePicker.RangePicker = (0, _FormItem.WrapFormItem)(ChaosRangePicker, {
  defaultDetailType: 'text'
});
var _default = FinalTimePicker;
exports.default = _default;