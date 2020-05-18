import React from 'react';
import { InputNumber } from 'antd';
import { WrapFormItem } from '../FormItem';

var ChaosInputNumber = function ChaosInputNumber(props) {
  return React.createElement(InputNumber, Object.assign({}, props));
};

export default WrapFormItem(ChaosInputNumber, {
  defaultDetailType: 'text'
});