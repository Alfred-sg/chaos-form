var logger = {
  log: console.log,
  success: console.log,
  fail: console.warn,
  successLogEnabled: false,
  failLogEnabled: true
};
export var setLogger = function setLogger(logger) {
  logger = logger;
};
export var log = function log() {
  logger.log && logger.log.apply(logger, arguments);
};
export var success = function success() {
  if (!logger.successLogEnabled) return;
  logger.success && logger.success.apply(logger, arguments);
};
export var fail = function fail() {
  if (!logger.failLogEnabled) return;
  logger.fail && logger.fail.apply(logger, arguments);
};
export var setSuccessLogEnabled = function setSuccessLogEnabled() {
  var successLogEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  logger.successLogEnabled = successLogEnabled;
};
export var setFailLogEnabled = function setFailLogEnabled() {
  var failLogEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  logger.failLogEnabled = failLogEnabled;
};