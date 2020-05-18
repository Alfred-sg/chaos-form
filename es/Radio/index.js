import React from 'react';
import { Radio } from 'antd';
import { WrapFormItem } from '../FormItem';

var ChaosRadio = function ChaosRadio(props) {
  return React.createElement(Radio.Group, Object.assign({}, props));
};

export default WrapFormItem(ChaosRadio, {
  defaultDetailType: 'text'
});