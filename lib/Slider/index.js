"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/slider/style");

var _slider = _interopRequireDefault(require("antd/lib/slider"));

var _react = _interopRequireDefault(require("react"));

var _FormItem = require("../FormItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChaosSlider = function ChaosSlider(props) {
  return _react.default.createElement(_slider.default, Object.assign({}, props));
};

var _default = (0, _FormItem.WrapFormItem)(ChaosSlider, {
  defaultDetailType: function defaultDetailType(props) {
    return _react.default.createElement(ChaosSlider, Object.assign({}, props, {
      disabled: true
    }));
  }
});

exports.default = _default;