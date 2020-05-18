import "antd/es/rate/style";
import _Rate from "antd/es/rate";
import React from 'react';
import { WrapFormItem } from '../FormItem';

var ChaosRate = function ChaosRate(props) {
  return React.createElement(_Rate, Object.assign({}, props));
};

export default WrapFormItem(ChaosRate, {
  defaultDetailType: function defaultDetailType(props) {
    return React.createElement(ChaosRate, Object.assign({}, props, {
      disabled: true
    }));
  }
});