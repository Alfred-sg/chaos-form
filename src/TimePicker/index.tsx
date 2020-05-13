import React from 'react';
import { TimePicker } from 'antd';
import { WrapFormItem } from '../FormItem';
import { TimePickerProps, TimeRangePickerProps } from 'antd/es/time-picker';

const ChaosTimePicker: React.FC<TimePickerProps> = (props) => {
  return (
    <TimePicker {...props}>
    </TimePicker>
  )
}

const ChaosRangePicker: React.FC<TimeRangePickerProps> = (props) => {
  return (
    <TimePicker.RangePicker {...props}>
    </TimePicker.RangePicker>
  )
}

const FinalTimePicker = WrapFormItem(ChaosTimePicker, {
  defaultDetailType: 'text',
});
FinalTimePicker.RangePicker = WrapFormItem(ChaosRangePicker, {
  defaultDetailType: 'text',
});

export default FinalTimePicker;