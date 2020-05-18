import "antd/es/radio/style";
import _Radio from "antd/es/radio";
import React from 'react';
import { WrapFormItem } from '../FormItem';

var ChaosRadio = function ChaosRadio(props) {
  return React.createElement(_Radio.Group, Object.assign({}, props));
};

export default WrapFormItem(ChaosRadio, {
  defaultDetailType: 'text'
});