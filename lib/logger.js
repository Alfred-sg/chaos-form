"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFailLogEnabled = exports.setSuccessLogEnabled = exports.fail = exports.success = exports.log = exports.setLogger = void 0;
var logger = {
  log: console.log,
  success: console.log,
  fail: console.warn,
  successLogEnabled: false,
  failLogEnabled: true
};

var setLogger = function setLogger(logger) {
  logger = logger;
};

exports.setLogger = setLogger;

var log = function log() {
  logger.log && logger.log.apply(logger, arguments);
};

exports.log = log;

var success = function success() {
  if (!logger.successLogEnabled) return;
  logger.success && logger.success.apply(logger, arguments);
};

exports.success = success;

var fail = function fail() {
  if (!logger.failLogEnabled) return;
  logger.fail && logger.fail.apply(logger, arguments);
};

exports.fail = fail;

var setSuccessLogEnabled = function setSuccessLogEnabled() {
  var successLogEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  logger.successLogEnabled = successLogEnabled;
};

exports.setSuccessLogEnabled = setSuccessLogEnabled;

var setFailLogEnabled = function setFailLogEnabled() {
  var failLogEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  logger.failLogEnabled = failLogEnabled;
};

exports.setFailLogEnabled = setFailLogEnabled;