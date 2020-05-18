import React from 'react';
import './index.less';

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
  return React.createElement("span", {
    className: "chaos-form-detail-text"
  }, Array.isArray(texts) ? texts.join(',') : texts);
};

export default Text;