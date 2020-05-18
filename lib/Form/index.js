"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

var _react = _interopRequireDefault(require("react"));

var _Context = _interopRequireDefault(require("./Context"));

var _AttributesContext = _interopRequireDefault(require("./AttributesContext"));

var _FormItem = _interopRequireDefault(require("../FormItem"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CustomForm = function CustomForm(props) {
  var form = props.form,
      children = props.children,
      detail = props.detail,
      rest = _objectWithoutProperties(props, ["form", "children", "detail"]);

  return _react.default.createElement("div", {
    className: detail ? 'chaos-form-detail' : undefined
  }, _react.default.createElement(_form.default, Object.assign({
    form: form
  }, rest), _react.default.createElement(_Context.default.Provider, {
    value: form
  }, _react.default.createElement(_AttributesContext.default.Provider, {
    value: _objectSpread({
      detail: detail
    }, rest)
  }, children))));
};

CustomForm.Item = _FormItem.default;
CustomForm.useForm = _form.default.useForm;
var _default = CustomForm;
exports.default = _default;