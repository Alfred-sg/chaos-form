import React from 'react';
import { Switch } from 'antd';
import { WrapFormItem } from '../FormItem';

var ChaosSwitch = function ChaosSwitch(props) {
  return React.createElement(Switch, Object.assign({}, props));
};

export default WrapFormItem(ChaosSwitch, {
  defaultDetailType: function defaultDetailType(props) {
    return React.createElement(ChaosSwitch, Object.assign({}, props, {
      disabled: true
    }));
  }
});