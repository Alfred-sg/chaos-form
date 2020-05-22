"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIcons = require("react-icons");

var _ai = require("react-icons/ai");

var _useList2 = _interopRequireDefault(require("./useList"));

var _Context = _interopRequireDefault(require("../Form/Context"));

var _PropsContext = _interopRequireDefault(require("../FormItem/PropsContext"));

var _FormItem = require("../FormItem");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ChaosList = function ChaosList(_ref) {
  var value = _ref.value,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 1 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 5 : _ref$max,
      addText = _ref.addText,
      transformFieldProps = _ref.transformFieldProps,
      children = _ref.children;
  var form = (0, _react.useContext)(_Context.default);
  var formItemPropsContext = (0, _react.useContext)(_PropsContext.default);

  var _useList = (0, _useList2.default)({
    onChange: function onChange(newDataSource) {
      form.setFieldsValue(_defineProperty({}, formItemPropsContext.name, newDataSource)); // 在这里 getFieldsValue 数据没更新，getFieldValue 数据已更新。。。
    },
    onAddOrRemove: function onAddOrRemove() {
      form.validateFields([formItemPropsContext.name]);
    }
  }),
      dataSource = _useList.dataSource,
      add = _useList.add,
      remove = _useList.remove,
      setDataSource = _useList.setDataSource,
      mainKey = _useList.mainKey;

  (0, _react.useEffect)(function () {
    if (value) setDataSource(value);
  }, [setDataSource, value]);
  return _react.default.createElement("div", {
    className: "chaos-form-list-wrap"
  }, _react.default.createElement("div", {
    className: "chaos-form-list"
  }, dataSource.map(function (item, index) {
    return _react.default.createElement("div", {
      key: mainKey + index,
      className: "chaos-form-list-item"
    }, _react.default.createElement("div", {
      className: "chaos-form-list-fields"
    }, _react.Children.map(children, function (child) {
      return (0, _react.cloneElement)(child, _objectSpread(_objectSpread({}, transformFieldProps ? transformFieldProps(child.props, index) : child.props), {}, {
        name: [formItemPropsContext.name, index, child.props.name],
        key: mainKey + index + child.props.name,
        className: "chaos-form-list-field",
        onChange: function onChange(event) {
          if (event && event.target) {
            dataSource[index][child.props.name] = child.props.getValueFromEvent ? child.props.getValueFromEvent(event.target.value) : event.target.value || event.target.checked;
          } else {
            dataSource[index][child.props.name] = event;
          }

          setDataSource(_toConsumableArray(dataSource));
        }
      }));
    })), index < min ? null : _react.default.createElement("span", {
      className: "chaos-form-list-remove",
      onClick: function onClick() {
        remove(index);
      }
    }, _react.default.createElement(_reactIcons.IconContext.Provider, {
      value: {
        className: "chaos-form-list-remove-icon"
      }
    }, _react.default.createElement(_ai.AiFillMinusCircle, null)), "\u5220\u9664"));
  })), _react.default.createElement("div", {
    className: dataSource.length == max ? "chaos-form-list-add disabled" : "chaos-form-list-add",
    onClick: function onClick() {
      if (dataSource.length < max) add();
    }
  }, _react.default.createElement(_reactIcons.IconContext.Provider, {
    value: {
      className: "chaos-form-list-add-icon"
    }
  }, _react.default.createElement(_ai.AiFillPlusCircle, null)), addText ? addText : '添加'));
};

var _default = (0, _FormItem.WrapFormItem)(ChaosList, {
  defaultDetailType: 'list',
  defaultFormItemProps: {
    shouldUpdate: true
  }
});

exports.default = _default;