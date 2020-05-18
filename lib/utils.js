"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extract = void 0;

var extract = function extract(source, keys) {
  var result = {};
  keys.forEach(function (key) {
    if (key in source) {
      result[key] = source[key];
    }

    ;
  });
  return result;
};

exports.extract = extract;