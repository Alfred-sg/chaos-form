import React from 'react';
import { InputNumber } from 'antd';
import { WrapFormItem } from '../FormItem';
import { InputNumberProps } from 'antd/es/input-number';

const ChaosInputNumber: React.FC<InputNumberProps> = (props) => {
  return (
    <InputNumber {...props}>
    </InputNumber>
  )
}

export default WrapFormItem(ChaosInputNumber, {
  defaultDetailType: 'text',
});