import "antd/es/switch/style";
import _Switch from "antd/es/switch";
import React from 'react';
import { WrapFormItem } from '../FormItem';

var ChaosSwitch = function ChaosSwitch(props) {
  return React.createElement(_Switch, Object.assign({}, props));
};

export default WrapFormItem(ChaosSwitch, {
  defaultDetailType: function defaultDetailType(props) {
    return React.createElement(ChaosSwitch, Object.assign({}, props, {
      disabled: true
    }));
  }
});