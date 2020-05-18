"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapFormItem = exports.default = void 0;

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

var _react = _interopRequireWildcard(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _PropsContext = _interopRequireDefault(require("./PropsContext"));

var _omit = _interopRequireDefault(require("omit.js"));

var _AttributesContext = _interopRequireDefault(require("../Form/AttributesContext"));

var _Detail = require("../Detail");

var _utils = require("../utils");

require("./index.less");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FormItem = function FormItem(props) {
  var className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, ["className", "children"]);

  var formItemClassName = (0, _classnames2.default)(_defineProperty({
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
  return _react.default.createElement(_PropsContext.default.Provider, {
    value: props
  }, _react.default.createElement(_form.default.Item, Object.assign({
    className: formItemClassName,
    required: true,
    validateFirst: true
  }, rest, {
    rules: rules
  }), children));
};

var _default = FormItem;
exports.default = _default;
;
var formItemPropNames = [// antd 属性
'colon', 'dependencies', 'extra', 'getValueFromEvent', 'getValueProps', 'hasFeedback', 'help', 'htmlFor', 'initialValue', 'noStyle', 'label', 'labelAlign', 'labelCol', 'name', 'normalize', 'required', 'rules', 'shouldUpdate', 'trigger', 'validateFirst', 'validateStatus', 'validateTrigger', 'valuePropName', 'wrapperCol', // antd 属性
'formItemClassName'];

var WrapFormItem = function WrapFormItem(Field, options) {
  var FormItemWrapper = function FormItemWrapper(props) {
    var formAttributesContext = (0, _react.useContext)(_AttributesContext.default);

    var children = props.children,
        detailType = props.detailType,
        rest = _objectWithoutProperties(props, ["children", "detailType"]);

    var formItemProps = (0, _utils.extract)(rest, formItemPropNames);
    var fieldProps = (0, _omit.default)(rest, formItemPropNames);
    var formItemPropsFromProps = options && options.getFormItemPropsFromProps ? options.getFormItemPropsFromProps(props) : undefined;

    var finalFormItemProps = _objectSpread(_objectSpread(_objectSpread({}, options && options.defaultFormItemProps), formItemProps), formItemPropsFromProps);

    var DetailComponent = detailType ? _Detail.DetailComponents[detailType] : typeof (options && options.defaultDetailType) == 'string' ? _Detail.DetailComponents[options === null || options === void 0 ? void 0 : options.defaultDetailType] : _typeof(options && options.defaultDetailType) !== undefined ? options === null || options === void 0 ? void 0 : options.defaultDetailType : undefined;
    return _react.default.createElement(FormItem, Object.assign({}, finalFormItemProps), formAttributesContext.detail && DetailComponent ? // @ts-ignore
    _react.default.createElement(DetailComponent, Object.assign({}, fieldProps, {
      valuePropName: finalFormItemProps.valuePropName
    }), children ? children : null) // @ts-ignore
    : _react.default.createElement(Field, Object.assign({}, fieldProps), children ? children : null));
  };

  return FormItemWrapper;
};

exports.WrapFormItem = WrapFormItem;