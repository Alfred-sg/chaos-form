import "antd/es/input-number/style";
import _InputNumber from "antd/es/input-number";
import React from 'react';
import { WrapFormItem } from '../FormItem';

var ChaosInputNumber = function ChaosInputNumber(props) {
  return React.createElement(_InputNumber, Object.assign({}, props));
};

export default WrapFormItem(ChaosInputNumber, {
  defaultDetailType: 'text'
});