import "antd/es/date-picker/style";
import _DatePicker from "antd/es/date-picker";
import React from 'react';
import { WrapFormItem } from '../FormItem';

var ChaosDatePicker = function ChaosDatePicker(props) {
  return React.createElement(_DatePicker, Object.assign({}, props));
};

var ChaosYearPicker = function ChaosYearPicker(props) {
  return React.createElement(_DatePicker.YearPicker, Object.assign({}, props));
};

var ChaosMonthPicker = function ChaosMonthPicker(props) {
  return React.createElement(_DatePicker.MonthPicker, Object.assign({}, props));
};

var ChaosWeekPicker = function ChaosWeekPicker(props) {
  return React.createElement(_DatePicker.WeekPicker, Object.assign({}, props));
};

var ChaosRangePicker = function ChaosRangePicker(props) {
  return React.createElement(_DatePicker.RangePicker, Object.assign({}, props));
};

var FinalDatePicker = WrapFormItem(ChaosDatePicker, {
  defaultDetailType: 'text'
}); // @ts-ignore

FinalDatePicker.YearPicker = WrapFormItem(ChaosYearPicker, {
  defaultDetailType: 'text'
}); // @ts-ignore

FinalDatePicker.MonthPicker = WrapFormItem(ChaosMonthPicker, {
  defaultDetailType: 'text'
}); // @ts-ignore

FinalDatePicker.WeekPicker = WrapFormItem(ChaosWeekPicker, {
  defaultDetailType: 'text'
}); // @ts-ignore

FinalDatePicker.RangePicker = WrapFormItem(ChaosRangePicker, {
  defaultDetailType: 'text'
});
export default FinalDatePicker;