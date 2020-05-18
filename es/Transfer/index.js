import "antd/es/transfer/style";
import _Transfer from "antd/es/transfer";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { WrapFormItem } from '../FormItem';

var ChaosTransfer = function ChaosTransfer(_ref) {
  var children = _ref.children,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ["children", "value"]);

  return React.createElement(_Transfer, Object.assign({}, rest, {
    targetKeys: value
  }), children);
};

export default WrapFormItem(ChaosTransfer, {
  defaultDetailType: 'text'
});