import React from 'react';
import { Rate } from 'antd';
import { WrapFormItem } from '../FormItem';

var ChaosRate = function ChaosRate(props) {
  return React.createElement(Rate, Object.assign({}, props));
};

export default WrapFormItem(ChaosRate, {
  defaultDetailType: function defaultDetailType(props) {
    return React.createElement(ChaosRate, Object.assign({}, props, {
      disabled: true
    }));
  }
});