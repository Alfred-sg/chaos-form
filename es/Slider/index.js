import React from 'react';
import { Slider } from 'antd';
import { WrapFormItem } from '../FormItem';

var ChaosSlider = function ChaosSlider(props) {
  return React.createElement(Slider, Object.assign({}, props));
};

export default WrapFormItem(ChaosSlider, {
  defaultDetailType: function defaultDetailType(props) {
    return React.createElement(ChaosSlider, Object.assign({}, props, {
      disabled: true
    }));
  }
});