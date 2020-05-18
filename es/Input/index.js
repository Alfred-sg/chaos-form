function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useContext } from 'react';
import { Input } from 'antd';
import { getRulesFromProps } from './utils';
import FormItemPropsContext from '../FormItem/PropsContext';
import { WrapFormItem } from '../FormItem';

var getExtraProps = function getExtraProps(type) {
  var extraProps = {};

  switch (type) {
    case 'chinaMobile':
      extraProps.type = 'phone';
      extraProps.maxLength = 11;
      break;

    case 'idCard':
      extraProps.maxLength = 18;
      break;
  }

  return extraProps;
};

var ChaosInput = function ChaosInput(props) {
  var formItemPropsContext = useContext(FormItemPropsContext);
  var FieldComp = props.type === 'textarea' ? Input.TextArea : Input;
  var extraProps = getExtraProps(props.type);
  return React.createElement(Input, Object.assign({
    placeholder: "\u8BF7\u8F93\u5165".concat(formItemPropsContext.label),
    maxLength: 30
  }, extraProps, props));
};

var ChaosTextArea = function ChaosTextArea(props) {
  var formItemPropsContext = useContext(FormItemPropsContext);
  return React.createElement(Input.TextArea, Object.assign({
    placeholder: "\u8BF7\u8F93\u5165".concat(formItemPropsContext.label),
    maxLength: 250
  }, props));
};

var FinalChaosInput = WrapFormItem(ChaosInput, {
  defaultDetailType: 'text',
  getFormItemPropsFromProps: function getFormItemPropsFromProps(props) {
    return {
      rules: getRulesFromProps(props),
      style: props.formItemStyle ? _objectSpread(_objectSpread({}, props.formItemStyle), {}, {
        visibility: !props.hidden ? 'inherit' : 'hidden'
      }) : props.hidden ? {
        display: 'none'
      } : undefined
    };
  }
}); // @ts-ignore

FinalChaosInput.Textarea = WrapFormItem(ChaosTextArea, {
  defaultDetailType: 'text'
});
export default FinalChaosInput;