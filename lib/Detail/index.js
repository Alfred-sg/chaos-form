"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDetailComponent = exports.DetailComponents = void 0;

var _Image = _interopRequireDefault(require("./Image"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _Text = _interopRequireDefault(require("./Text"));

var _List = _interopRequireDefault(require("./List"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DetailComponents = {
  'image': _Image.default,
  'tag': _Tag.default,
  'text': _Text.default,
  'list': _List.default
};
exports.DetailComponents = DetailComponents;

var setDetailComponent = function setDetailComponent(type, DetailComponent) {
  DetailComponents[type] = DetailComponent;
};

exports.setDetailComponent = setDetailComponent;