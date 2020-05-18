function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Children, cloneElement, useContext, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import useList from './useList';
import FormContext from '../Form/Context';
import FormItemPropsContext from '../FormItem/PropsContext';
import { WrapFormItem } from '../FormItem';
import './index.less';

var ChaosList = function ChaosList(_ref) {
  var value = _ref.value,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 1 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 5 : _ref$max,
      addText = _ref.addText,
      transformFieldProps = _ref.transformFieldProps,
      children = _ref.children;
  var form = useContext(FormContext);
  var formItemPropsContext = useContext(FormItemPropsContext);

  var _useList = useList({
    onChange: function onChange(newDataSource) {
      form.setFieldsValue(_defineProperty({}, formItemPropsContext.name, newDataSource)); // 在这里 getFieldsValue 数据没更新，getFieldValue 数据已更新。。。
    },
    onAddOrRemove: function onAddOrRemove() {
      form.validateFields([formItemPropsContext.name]);
    }
  }),
      dataSource = _useList.dataSource,
      add = _useList.add,
      remove = _useList.remove,
      setDataSource = _useList.setDataSource,
      mainKey = _useList.mainKey;

  useEffect(function () {
    if (value) setDataSource(value);
  }, [setDataSource, value]);
  return React.createElement("div", {
    className: "chaos-form-list-wrap"
  }, React.createElement("div", {
    className: "chaos-form-list"
  }, dataSource.map(function (item, index) {
    return React.createElement("div", {
      key: mainKey + index,
      className: "chaos-form-list-item"
    }, React.createElement("div", {
      className: "chaos-form-list-fields"
    }, Children.map(children, function (child) {
      return cloneElement(child, _objectSpread(_objectSpread({}, transformFieldProps ? transformFieldProps(child.props, index) : child.props), {}, {
        name: [formItemPropsContext.name, index, child.props.name],
        key: mainKey + index + child.props.name,
        className: "chaos-form-list-field",
        onChange: function onChange(event) {
          if (event && event.target) {
            dataSource[index][child.props.name] = child.props.getValueFromEvent ? child.props.getValueFromEvent(event.target.value) : event.target.value || event.target.checked;
          } else {
            dataSource[index][child.props.name] = event;
          }

          setDataSource(_toConsumableArray(dataSource));
        }
      }));
    })), index < min ? null : React.createElement("span", {
      className: "chaos-form-list-remove",
      onClick: function onClick() {
        remove(index);
      }
    }, React.createElement(IconContext.Provider, {
      value: {
        className: "chaos-form-list-remove-icon"
      }
    }, React.createElement(AiFillMinusCircle, null)), "\u5220\u9664"));
  })), React.createElement("div", {
    className: dataSource.length == max ? "chaos-form-list-add disabled" : "chaos-form-list-add",
    onClick: function onClick() {
      if (dataSource.length < max) add();
    }
  }, React.createElement(IconContext.Provider, {
    value: {
      className: "chaos-form-list-add-icon"
    }
  }, React.createElement(AiFillPlusCircle, null)), addText ? addText : '添加'));
};

export default WrapFormItem(ChaosList, {
  defaultDetailType: 'list',
  defaultFormItemProps: {
    shouldUpdate: true
  }
});