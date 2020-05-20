import React, { Fragment } from 'react';

var defaultRenderItem = function defaultRenderItem(val) {
  return val ? React.createElement("span", {
    className: "chaos-form-detail-img",
    style: {
      backgroundImage: val
    }
  }) : null;
};

var Tag = function Tag(props) {
  var valuePropName = props.valuePropName,
      _props$renderDetailIt = props.renderDetailItem,
      renderDetailItem = _props$renderDetailIt === void 0 ? defaultRenderItem : _props$renderDetailIt;
  var value = valuePropName ? props[valuePropName] : props.value;
  return React.createElement(Fragment, null, Array.isArray(value) ? React.createElement("div", {
    className: "chaos-form-detail-tags"
  }, value.map(function (val, index) {
    return React.createElement("span", {
      key: index
    }, renderDetailItem(val));
  })) : renderDetailItem(value));
};

export default Tag;