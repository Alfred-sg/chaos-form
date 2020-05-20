import * as logger from '../logger'; // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers

export var convetAccept = function convetAccept(accept) {
  return (accept || '').split(',').map(function (type) {
    var convertedType = type;

    switch (type) {
      // 图片
      case 'image':
        convertedType = 'image/*';
        break;
      // 音频

      case 'audio':
        convertedType = 'audio/*';
        break;
      // 视频

      case 'vedio':
        convertedType = 'vedio/*';
        break;
      // doc 文档

      case 'doc':
        convertedType = '.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        break;
      // excel

      case 'excel':
        convertedType = '.xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        break;

      case 'pdf':
        convertedType = '.pdf';
        break;

      case 'ppt':
        convertedType = '.ppt,.pptx,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation';
        break;
    }

    ;
    return convertedType;
  }).join(',');
}; // 校验文件

export var fileValidatorFactory = function fileValidatorFactory(props) {
  return function (file) {
    var preventUpload = false;

    if (props.accept) {
      var typeAllowed = false;
      var hasAcceptNotRegistered = false;
      props.accept.split(',').map(function (type) {
        var matched;

        switch (type) {
          // 图片
          case 'image':
            matched = file.type.match(/^image\/\w*$/);
            if (matched) typeAllowed = true;
            break;
          // 音频

          case 'audio':
            matched = file.type.match(/^audio\/\w*$/);
            if (matched) typeAllowed = true;
            break;
          // 视频

          case 'vedio':
            matched = file.type.match(/^vedio\/\w*$/);
            if (matched) typeAllowed = true;
            break;
          // doc 文档

          case 'doc':
            matched = file.type.match(/^(application\/msword)|(application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document)$/);
            if (matched) typeAllowed = true;
            break;
          // excel

          case 'excel':
            matched = file.type.match(/^(application\/vnd\.ms-excel)|(application\/vnd\.openxmlformats-officedocument\.spreadsheetml\.sheet)$/);
            if (matched) typeAllowed = true;
            break;

          case 'pdf':
            matched = file.type.match(/^application\/pdf$/);
            if (matched) typeAllowed = true;
            break;

          case 'ppt':
            matched = file.type.match(/^(application\/vnd\.ms-powerpoint)|(application\/vnd\.openxmlformats-officedocument\.presentationml\.presentation)$/);
            if (matched) typeAllowed = true;
            break;

          default:
            hasAcceptNotRegistered = true;
        }

        ;
      }).join(',');

      if (!hasAcceptNotRegistered && !typeAllowed) {
        preventUpload = true;
        logger.fail('文件格式不正确');
      }
    }

    if (props.maxSize) {
      var lessThenMaxSize = file.size / 1024 / 1024 < props.maxSize;

      if (!lessThenMaxSize) {
        preventUpload = true;
        logger.fail("\u6587\u4EF6\u4E0D\u80FD\u5927\u4E8E ".concat(props.maxSize, "MB"));
      }
    }

    if (props.max) {
      if (props.fileList && props.fileList.length >= props.max) {
        preventUpload = true;
        logger.fail("\u4E0A\u4F20\u6587\u4EF6\u6570\u4E0D\u80FD\u8D85\u8FC7 ".concat(props.max, " \u4E2A"));
      }
    } // @ts-ignore


    file.uploadPrevented = preventUpload;
    return !preventUpload;
  };
};