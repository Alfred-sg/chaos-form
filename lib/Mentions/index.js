"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/mentions/style");

var _mentions = _interopRequireDefault(require("antd/lib/mentions"));

var _react = _interopRequireDefault(require("react"));

var _FormItem = require("../FormItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ChaosMentions = function ChaosMentions(_ref) {
  var options = _ref.options,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["options", "children"]);

  return _react.default.createElement(_mentions.default, Object.assign({}, rest), options ? options.map(function (option) {
    return _react.default.createElement(_mentions.default.Option, {
      key: option.value,
      value: option.value
    }, option.label);
  }) : children);
};

var _default = (0, _FormItem.WrapFormItem)(ChaosMentions, {
  defaultDetailType: 'text'
});

exports.default = _default;