import "antd/es/tree-select/style";
import _TreeSelect from "antd/es/tree-select";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { WrapFormItem } from '../FormItem';

var ChaosTreeSelect = function ChaosTreeSelect(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(_TreeSelect, Object.assign({}, rest), children);
};

var FinalTreeSelect = WrapFormItem(ChaosTreeSelect, {
  defaultDetailType: 'text'
}); // @ts-ignore

FinalTreeSelect.TreeNode = _TreeSelect.TreeNode;
export default FinalTreeSelect;