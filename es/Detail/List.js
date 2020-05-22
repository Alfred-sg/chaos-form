function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Children, cloneElement, useContext } from 'react';
import FormItemPropsContext from '../FormItem/PropsContext';
import "./index.css";

var List = function List(_ref) {
  var value = _ref.value,
      renderItemDetail = _ref.renderItemDetail,
      children = _ref.children;
  var formItemPropsContext = useContext(FormItemPropsContext);
  return React.createElement("div", {
    className: "chaos-form-detail-list"
  }, (value || []).map(function (item, index) {
    return React.createElement("div", {
      className: "chaos-form-detail-item",
      key: index
    }, renderItemDetail ? renderItemDetail(item, index) : React.createElement("div", {
      className: "chaos-form-detail-row",
      key: index
    }, Children.map( // @ts-ignore
    children, function (child) {
      var props = child.props;
      return cloneElement(child, _objectSpread(_objectSpread({}, props), {}, {
        name: [formItemPropsContext.name, index, props.name],
        key: "".concat(index).concat(props.name)
      }));
    })));
  }));
};

export default List;