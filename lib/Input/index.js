"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

var _PropsContext = _interopRequireDefault(require("../FormItem/PropsContext"));

var _FormItem = require("../FormItem");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getExtraProps = function getExtraProps(type) {
  var extraProps = {};

  switch (type) {
    case 'chinaMobile':
      extraProps.type = 'phone';
      extraProps.maxLength = 11;
      break;

    case 'idCard':
      extraProps.maxLength = 18;
      break;
  }

  return extraProps;
};

var ChaosInput = function ChaosInput(props) {
  var formItemPropsContext = (0, _react.useContext)(_PropsContext.default);
  var FieldComp = props.type === 'textarea' ? _input.default.TextArea : _input.default;
  var extraProps = getExtraProps(props.type);
  return _react.default.createElement(_input.default, Object.assign({
    placeholder: "\u8BF7\u8F93\u5165".concat(formItemPropsContext.label),
    maxLength: 30
  }, extraProps, props));
};

var ChaosTextArea = function ChaosTextArea(props) {
  var formItemPropsContext = (0, _react.useContext)(_PropsContext.default);
  return _react.default.createElement(_input.default.TextArea, Object.assign({
    placeholder: "\u8BF7\u8F93\u5165".concat(formItemPropsContext.label),
    maxLength: 250
  }, props));
};

var FinalChaosInput = (0, _FormItem.WrapFormItem)(ChaosInput, {
  defaultDetailType: 'text',
  getFormItemPropsFromProps: function getFormItemPropsFromProps(props) {
    return {
      rules: (0, _utils.getRulesFromProps)(props),
      style: props.formItemStyle ? _objectSpread(_objectSpread({}, props.formItemStyle), {}, {
        visibility: !props.hidden ? 'inherit' : 'hidden'
      }) : props.hidden ? {
        display: 'none'
      } : undefined
    };
  }
}); // @ts-ignore

FinalChaosInput.Textarea = (0, _FormItem.WrapFormItem)(ChaosTextArea, {
  defaultDetailType: 'text'
});
var _default = FinalChaosInput;
exports.default = _default;