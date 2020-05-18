function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from 'react';
import { Select } from 'antd';
import { WrapFormItem } from '../FormItem';
import FormItemPropsContext from '../FormItem/PropsContext';

var ChaosSelect = function ChaosSelect(_ref) {
  var options = _ref.options,
      rest = _objectWithoutProperties(_ref, ["options"]);

  var formItemPropsContext = useContext(FormItemPropsContext);
  return React.createElement(Select, Object.assign({
    placeholder: "\u8BF7\u9009\u62E9".concat(formItemPropsContext.label)
  }, rest), (options || []).map(function (option) {
    return React.createElement(Select.Option, {
      key: option.value,
      value: option.value
    }, option.label);
  }));
};

export default WrapFormItem(ChaosSelect, {
  defaultDetailType: 'text'
});