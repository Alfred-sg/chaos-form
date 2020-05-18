import React from 'react';
import { TimePicker } from 'antd';
import { WrapFormItem } from '../FormItem';

var ChaosTimePicker = function ChaosTimePicker(props) {
  return React.createElement(TimePicker, Object.assign({}, props));
};

var ChaosRangePicker = function ChaosRangePicker(props) {
  return React.createElement(TimePicker.RangePicker, Object.assign({}, props));
};

var FinalTimePicker = WrapFormItem(ChaosTimePicker, {
  defaultDetailType: 'text'
}); // @ts-ignore

FinalTimePicker.RangePicker = WrapFormItem(ChaosRangePicker, {
  defaultDetailType: 'text'
});
export default FinalTimePicker;