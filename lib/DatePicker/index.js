"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/date-picker/style");

var _datePicker = _interopRequireDefault(require("antd/lib/date-picker"));

var _react = _interopRequireDefault(require("react"));

var _FormItem = require("../FormItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChaosDatePicker = function ChaosDatePicker(props) {
  return _react.default.createElement(_datePicker.default, Object.assign({}, props));
};

var ChaosYearPicker = function ChaosYearPicker(props) {
  return _react.default.createElement(_datePicker.default.YearPicker, Object.assign({}, props));
};

var ChaosMonthPicker = function ChaosMonthPicker(props) {
  return _react.default.createElement(_datePicker.default.MonthPicker, Object.assign({}, props));
};

var ChaosWeekPicker = function ChaosWeekPicker(props) {
  return _react.default.createElement(_datePicker.default.WeekPicker, Object.assign({}, props));
};

var ChaosRangePicker = function ChaosRangePicker(props) {
  return _react.default.createElement(_datePicker.default.RangePicker, Object.assign({}, props));
};

var FinalDatePicker = (0, _FormItem.WrapFormItem)(ChaosDatePicker, {
  defaultDetailType: 'text'
}); // @ts-ignore

FinalDatePicker.YearPicker = (0, _FormItem.WrapFormItem)(ChaosYearPicker, {
  defaultDetailType: 'text'
}); // @ts-ignore

FinalDatePicker.MonthPicker = (0, _FormItem.WrapFormItem)(ChaosMonthPicker, {
  defaultDetailType: 'text'
}); // @ts-ignore

FinalDatePicker.WeekPicker = (0, _FormItem.WrapFormItem)(ChaosWeekPicker, {
  defaultDetailType: 'text'
}); // @ts-ignore

FinalDatePicker.RangePicker = (0, _FormItem.WrapFormItem)(ChaosRangePicker, {
  defaultDetailType: 'text'
});
var _default = FinalDatePicker;
exports.default = _default;