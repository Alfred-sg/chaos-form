"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/rate/style");

var _rate = _interopRequireDefault(require("antd/lib/rate"));

var _react = _interopRequireDefault(require("react"));

var _FormItem = require("../FormItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChaosRate = function ChaosRate(props) {
  return _react.default.createElement(_rate.default, Object.assign({}, props));
};

var _default = (0, _FormItem.WrapFormItem)(ChaosRate, {
  defaultDetailType: function defaultDetailType(props) {
    return _react.default.createElement(ChaosRate, Object.assign({}, props, {
      disabled: true
    }));
  }
});

exports.default = _default;