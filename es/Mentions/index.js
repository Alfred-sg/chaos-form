import "antd/es/mentions/style";
import _Mentions from "antd/es/mentions";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { WrapFormItem } from '../FormItem';

var ChaosMentions = function ChaosMentions(_ref) {
  var options = _ref.options,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["options", "children"]);

  return React.createElement(_Mentions, Object.assign({}, rest), options ? options.map(function (option) {
    return React.createElement(_Mentions.Option, {
      key: option.value,
      value: option.value
    }, option.label);
  }) : children);
};

export default WrapFormItem(ChaosMentions, {
  defaultDetailType: 'text'
});