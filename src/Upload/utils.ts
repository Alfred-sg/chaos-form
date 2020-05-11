import * as logger from '../logger';
import { ChaosUploadProps } from './types';

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers
export const convetAccept = (accept?: string) => {
  return (accept || '').split(',').map(type => {
    let convertedType = type;
    switch(type){
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
    };

    return convertedType;
  }).join(',');
}

// 校验文件
export const fileValidatorFactory = (props: ChaosUploadProps) => {
  return (file: File) => {
    let preventUpload = true;

    if (props.accept){
      let typeAllowed = false;
      let hasAcceptNotRegistered = false;

      props.accept.split(',').map(type => {
        let matched;
        switch(type){
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
        };
      }).join(',');
  
      if (!hasAcceptNotRegistered && !typeAllowed){
        preventUpload = false;
        logger.fail('文件格式不正确');
      }
    }

    if (props.maxSize){
      const lessThenMaxSize = file.size / 1024 / 1024 < props.maxSize;
      if (!lessThenMaxSize) {
        preventUpload = false;
        logger.fail(`文件不能大于 ${props.maxSize}MB`);
      }
    }

    if (props.max){
      if (props.fileList && props.fileList.length >= props.max){
        preventUpload = false;
        logger.fail(`上传文件数不能超过 ${props.max} 个`);
      }
    }

    // @ts-ignore
    file.uploadPrevented = true;
    return preventUpload;
  }
}