import "antd/es/radio/style";
import _Radio from "antd/es/radio";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import useOptions from '../hooks/useOptions';
import { WrapFormItem } from '../FormItem';

var ChaosRadio = function ChaosRadio(_ref) {
  var optionsProp = _ref.options,
      rest = _objectWithoutProperties(_ref, ["options"]);

  var _useOptions = useOptions(optionsProp),
      options = _useOptions.options;

  return React.createElement(_Radio.Group, Object.assign({}, rest, {
    options: options
  }));
};

export default WrapFormItem(ChaosRadio, {
  defaultDetailType: 'text'
});