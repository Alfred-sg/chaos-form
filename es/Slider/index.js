import "antd/es/slider/style";
import _Slider from "antd/es/slider";
import React from 'react';
import { WrapFormItem } from '../FormItem';

var ChaosSlider = function ChaosSlider(props) {
  return React.createElement(_Slider, Object.assign({}, props));
};

export default WrapFormItem(ChaosSlider, {
  defaultDetailType: function defaultDetailType(props) {
    return React.createElement(ChaosSlider, Object.assign({}, props, {
      disabled: true
    }));
  }
});