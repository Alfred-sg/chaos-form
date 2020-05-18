export var extract = function extract(source, keys) {
  var result = {};
  keys.forEach(function (key) {
    if (key in source) {
      result[key] = source[key];
    }

    ;
  });
  return result;
};