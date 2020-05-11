interface Logger {
  log?: Function,
  success?: Function,
  fail?: Function,
  [key: string]: any,
}

let logger: Logger = {
  log: console.log,
  success: console.log,
  fail: console.warn,
  successLogEnabled: false,
  failLogEnabled: true,
};

export const setLogger = (logger: Logger) => {
  logger = logger;
}

export const log = (...args: any[]) => {
  logger.log && logger.log(...args);
}

export const success = (...args: any[]) => {
  if (!logger.successLogEnabled) return;
  logger.success && logger.success(...args);
}

export const fail = (...args: any[]) => {
  if (!logger.failLogEnabled) return;
  logger.fail && logger.fail(...args);
}

export const setSuccessLogEnabled = (successLogEnabled: boolean = true) => {
  logger.successLogEnabled = successLogEnabled;
}

export const setFailLogEnabled = (failLogEnabled: boolean = true) => {
  logger.failLogEnabled = failLogEnabled;
}