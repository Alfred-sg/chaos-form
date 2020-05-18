import "antd/es/time-picker/style";
import _TimePicker from "antd/es/time-picker";
import React from 'react';
import { WrapFormItem } from '../FormItem';

var ChaosTimePicker = function ChaosTimePicker(props) {
  return React.createElement(_TimePicker, Object.assign({}, props));
};

var ChaosRangePicker = function ChaosRangePicker(props) {
  return React.createElement(_TimePicker.RangePicker, Object.assign({}, props));
};

var FinalTimePicker = WrapFormItem(ChaosTimePicker, {
  defaultDetailType: 'text'
}); // @ts-ignore

FinalTimePicker.RangePicker = WrapFormItem(ChaosRangePicker, {
  defaultDetailType: 'text'
});
export default FinalTimePicker;