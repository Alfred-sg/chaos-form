"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./index.less");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var defaultRenderItem = function defaultRenderItem(val) {
  return val ? _react.default.createElement("span", {
    className: "chaos-form-detail-tag"
  }, val) : null;
};

var Tag = function Tag(props) {
  var valuePropName = props.valuePropName,
      _props$renderDetailIt = props.renderDetailItem,
      renderDetailItem = _props$renderDetailIt === void 0 ? defaultRenderItem : _props$renderDetailIt;
  var value = valuePropName ? props[valuePropName] : props.value;
  return _react.default.createElement(_react.Fragment, null, Array.isArray(value) ? _react.default.createElement("div", {
    className: "chaos-form-detail-tags"
  }, value.map(function (val, index) {
    return _react.default.createElement("span", {
      key: index,
      className: "chaos-form-detail-tag"
    }, renderDetailItem(val));
  })) : renderDetailItem(value));
};

var _default = Tag;
exports.default = _default;