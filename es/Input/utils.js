function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { ChinaMobileValidator, TelephoneValidator, IdCardValidator } from './validator';
export var getRulesFromProps = function getRulesFromProps(props) {
  var rules = [];

  if (props.required) {
    rules.push({
      required: true,
      message: "\u8BF7\u8F93\u5165".concat(props.label),
      whitespace: true
    });
  }

  switch (props.type) {
    case 'chinaMobile':
      rules.push({
        validator: ChinaMobileValidator
      });
      break;

    case 'telephone':
      rules.push({
        validator: TelephoneValidator
      });
      break;

    case 'email':
      rules.push({
        pattern: /^[\.A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
        message: '邮箱格式不正确'
      });
      break;

    case 'idCard':
      rules.push({
        validator: IdCardValidator
      });
  }

  if (props.rules) rules = [].concat(_toConsumableArray(rules), [props.rules]);
  return rules;
};