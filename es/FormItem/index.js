import "antd/es/form/style";
import _Form from "antd/es/form";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from 'react';
import classnames from 'classnames';
import PropsContext from './PropsContext';
import omit from 'omit.js';
import FormAttributesContext from '../Form/AttributesContext';
import { DetailComponents } from '../Detail';
import { extract } from '../utils';
import "./index.css";

var FormItem = function FormItem(props) {
  var className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, ["className", "children"]);

  var formItemClassName = classnames(_defineProperty({
    'chaos-form-item': true
  }, className, !!className));
  var rules = props.rules ? props.rules : [];

  if (props.required) {
    rules.unshift({
      required: true,
      message: "".concat(props.label || '字段', "\u4E0D\u53EF\u7F3A\u5931")
    });
  }

  ;
  return React.createElement(PropsContext.Provider, {
    value: props
  }, React.createElement(_Form.Item, Object.assign({
    className: formItemClassName,
    required: true,
    validateFirst: true
  }, rest, {
    rules: rules
  }), children));
};

export default FormItem;
;
var formItemPropNames = [// antd 属性
'colon', 'dependencies', 'extra', 'getValueFromEvent', 'getValueProps', 'hasFeedback', 'help', 'htmlFor', 'initialValue', 'noStyle', 'label', 'labelAlign', 'labelCol', 'name', 'normalize', 'required', 'rules', 'shouldUpdate', 'trigger', 'validateFirst', 'validateStatus', 'validateTrigger', 'valuePropName', 'wrapperCol', // antd 属性
'formItemClassName'];
var detailFormItemPropNames = [// antd 属性
'colon', 'dependencies', 'getValueFromEvent', 'getValueProps', 'htmlFor', 'initialValue', 'noStyle', 'label', 'labelAlign', 'labelCol', 'name', 'normalize', 'required', 'valuePropName', 'wrapperCol', // antd 属性
'formItemClassName'];
export var WrapFormItem = function WrapFormItem(Field, options) {
  var FormItemWrapper = function FormItemWrapper(props) {
    var formAttributesContext = useContext(FormAttributesContext);
    var isDetail = formAttributesContext.detail;

    var children = props.children,
        detailType = props.detailType,
        rest = _objectWithoutProperties(props, ["children", "detailType"]);

    var formItemProps = extract(rest, isDetail ? detailFormItemPropNames : formItemPropNames);
    var fieldProps = omit(rest, formItemPropNames);
    var formItemPropsFromProps = options && options.getFormItemPropsFromProps ? options.getFormItemPropsFromProps(props) : undefined;

    var finalFormItemProps = _objectSpread(_objectSpread(_objectSpread({}, options && options.defaultFormItemProps), formItemProps), formItemPropsFromProps);

    var DetailComponent = detailType ? DetailComponents[detailType] : typeof (options && options.defaultDetailType) == 'string' ? DetailComponents[options === null || options === void 0 ? void 0 : options.defaultDetailType] : _typeof(options && options.defaultDetailType) !== undefined ? options === null || options === void 0 ? void 0 : options.defaultDetailType : undefined;
    return React.createElement(FormItem, Object.assign({}, finalFormItemProps), isDetail && DetailComponent ? // @ts-ignore
    React.createElement(DetailComponent, Object.assign({}, fieldProps, {
      valuePropName: finalFormItemProps.valuePropName
    }), children ? children : null) // @ts-ignore
    : React.createElement(Field, Object.assign({}, fieldProps), children ? children : null));
  };

  return FormItemWrapper;
};