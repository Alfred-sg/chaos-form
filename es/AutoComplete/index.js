import "antd/es/auto-complete/style";
import _AutoComplete from "antd/es/auto-complete";
import React from 'react';
import { WrapFormItem } from '../FormItem';

var ChaosAutoComplete = function ChaosAutoComplete(props) {
  return React.createElement(_AutoComplete, Object.assign({}, props));
};

export default WrapFormItem(ChaosAutoComplete, {
  defaultDetailType: 'text'
});