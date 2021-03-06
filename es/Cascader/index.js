import "antd/es/cascader/style";
import _Cascader from "antd/es/cascader";
import React, { useContext } from 'react';
import { WrapFormItem } from '../FormItem';
import FormItemPropsContext from '../FormItem/PropsContext';

var ChaosCascader = function ChaosCascader(props) {
  var formItemPropsContext = useContext(FormItemPropsContext);
  return React.createElement(_Cascader, Object.assign({
    placeholder: "\u8BF7\u9009\u62E9".concat(formItemPropsContext.label)
  }, props));
};

export default WrapFormItem(ChaosCascader, {
  defaultDetailType: 'text'
});