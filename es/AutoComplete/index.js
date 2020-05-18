import React from 'react';
import { AutoComplete } from 'antd';
import { WrapFormItem } from '../FormItem';

var ChaosAutoComplete = function ChaosAutoComplete(props) {
  return React.createElement(AutoComplete, Object.assign({}, props));
};

export default WrapFormItem(ChaosAutoComplete, {
  defaultDetailType: 'text'
});