import React from 'react';
import { DatePicker } from 'antd';
import { WrapFormItem } from '../FormItem';
import { 
  DatePickerProps, MonthPickerProps, WeekPickerProps, RangePickerProps
} from 'antd/es/date-picker';

const ChaosDatePicker: React.FC<DatePickerProps> = (props) => {
  return (
    <DatePicker {...props}>
    </DatePicker>
  )
}

const ChaosYearPicker: React.FC<DatePickerProps> = (props) => {
  return (
    <DatePicker.YearPicker {...props}>
    </DatePicker.YearPicker>
  )
}

const ChaosMonthPicker: React.FC<MonthPickerProps> = (props) => {
  return (
    <DatePicker.MonthPicker {...props}>
    </DatePicker.MonthPicker>
  )
}

const ChaosWeekPicker: React.FC<WeekPickerProps> = (props) => {
  return (
    <DatePicker.WeekPicker {...props}>
    </DatePicker.WeekPicker>
  )
}

const ChaosRangePicker: React.FC<RangePickerProps> = (props) => {
  return (
    <DatePicker.RangePicker {...props}>
    </DatePicker.RangePicker>
  )
}

const FinalDatePicker = WrapFormItem(ChaosDatePicker, {
  defaultDetailType: 'text',
});
FinalDatePicker.YearPicker = WrapFormItem(ChaosYearPicker, {
  defaultDetailType: 'text',
});
FinalDatePicker.MonthPicker = WrapFormItem(ChaosMonthPicker, {
  defaultDetailType: 'text',
});
FinalDatePicker.WeekPicker = WrapFormItem(ChaosWeekPicker, {
  defaultDetailType: 'text',
});
FinalDatePicker.RangePicker = WrapFormItem(ChaosRangePicker, {
  defaultDetailType: 'text',
});

export default FinalDatePicker;