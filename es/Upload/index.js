import "antd/es/upload/style";
import _Upload from "antd/es/upload";
import "antd/es/button/style";
import _Button from "antd/es/button";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState, useContext, Fragment } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineUpload, AiOutlineLoading, AiOutlinePlus } from 'react-icons/ai';
import { WrapFormItem } from '../FormItem';
import { convetAccept, fileValidatorFactory } from './utils';
import FormItemPropsContext from '../FormItem/PropsContext';
import * as logger from '../logger';
import "./index.css";

var ChaosUpload = function ChaosUpload(_ref) {
  var children = _ref.children,
      max = _ref.max,
      fileList = _ref.fileList,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ["children", "max", "fileList", "onChange"]);

  var formItemPropsContext = useContext(FormItemPropsContext);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var defaultTransformFile = rest.watermark ? function (file) {
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function () {
        var canvas = document.createElement('canvas');
        var img = document.createElement('img');
        img.src = reader.result;

        img.onload = function () {
          var ctx = canvas.getContext('2d');
          if (!ctx) return;
          ctx.drawImage(img, 0, 0);
          ctx.fillStyle = 'red';
          ctx.textBaseline = 'middle';
          ctx.fillText(rest.watermark, 20, 20); // @ts-ignore

          canvas.toBlob(resolve);
        };
      };
    });
  } : undefined;
  var transformFile = rest.transformFile ? rest.transformFile : defaultTransformFile;
  var beforeUpload = fileValidatorFactory(rest); // 上传前校验

  var handleChange = function handleChange(info) {
    if (info.file.status === 'uploading') {
      setLoading(true);
      onChange && onChange(info);
      return;
    }

    if (info.file.status === 'done') {
      setLoading(false);

      if (info.file.response && info.file.response.success) {
        logger.success('上传成功');
      } else {
        logger.fail('上传失败', info.file.response);
      }
    } else if (info.file.status === 'error') {
      setLoading(false);
      logger.fail('上传失败', info.file.response);
    }

    ;
    info.fileList = info.fileList.filter(function (file) {
      if (file.status === 'error' || file.uploadPrevented || file.status === 'done' && file.response && !file.response.success) return false;
      return true;
    });
    onChange && onChange(info);
  };

  var uploadNode = children ? children : rest.listType == 'picture-card' ? React.createElement(Fragment, null, React.createElement(IconContext.Provider, {
    value: {
      className: 'chaos-upload-picture-icon'
    }
  }, React.createElement(AiOutlinePlus, null)), React.createElement("div", {
    className: "ant-upload-text"
  }, "\u4E0A\u4F20\u56FE\u7247")) : React.createElement(_Button, {
    type: "default"
  }, React.createElement(IconContext.Provider, {
    value: {
      className: 'chaos-upload-icon'
    }
  }, loading ? React.createElement(AiOutlineLoading, null) : React.createElement(AiOutlineUpload, null)), "\u6587\u4EF6\u4E0A\u4F20");
  return React.createElement(_Upload, Object.assign({
    disabled: max != undefined && fileList && fileList.length >= max ? true : false
  }, rest, {
    name: formItemPropsContext.name,
    fileList: fileList,
    accept: convetAccept(rest.accept),
    transformFile: transformFile,
    beforeUpload: beforeUpload,
    onChange: handleChange
  }), uploadNode);
};

export default WrapFormItem(ChaosUpload, {
  defaultDetailType: 'tag',
  defaultFormItemProps: {
    valuePropName: "fileList",
    getValueFromEvent: function getValueFromEvent(e) {
      return Array.isArray(e) ? e : e && e.fileList;
    }
  }
});