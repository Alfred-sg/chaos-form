"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = function Text(_ref) {
  var value = _ref.value,
      options = _ref.options;
  var texts = Array.isArray(value) ? value : value ? [value] : [];

  if (options && options.length) {
    texts = texts.map(function (item) {
      var found = options.find(function (option) {
        return option.value === item;
      });
      return found ? found.label : item;
    });
  }

  ;
  return _react.default.createElement("span", {
    className: "chaos-form-detail-text"
  }, Array.isArray(texts) ? texts.join(',') : texts);
};

var _default = Text;
exports.default = _default;