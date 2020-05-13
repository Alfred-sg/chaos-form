import React, { useState, Fragment } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineUpload, AiOutlineLoading, AiOutlinePlus } from 'react-icons/ai';
import { Upload, Button } from 'antd';
import { WrapFormItem } from '../FormItem';
import { convetAccept, fileValidatorFactory } from './utils';
import * as logger from '../logger';
import { UploadFile, UploadChangeParam, RcFile } from 'antd/es/upload/interface';
import { ChaosUploadProps } from './types';
import './index.less';

const ChaosUpload = ({
  children,
  max,// 最大上传数
  fileList,// 作为 value
  onChange,
  ...rest
}: ChaosUploadProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const defaultTransformFile = rest.watermark ? (file: RcFile) => {
    return new Promise<string | Blob | File>(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const canvas = document.createElement('canvas');
        const img = document.createElement('img');
        img.src = reader.result as string;
        img.onload = () => {
          const ctx = canvas.getContext('2d');
          if (!ctx) return;
          ctx.drawImage(img, 0, 0);
          ctx.fillStyle = 'red';
          ctx.textBaseline = 'middle';
          ctx.fillText(rest.watermark as string, 20, 20);
          // @ts-ignore
          canvas.toBlob(resolve);
        };
      };
    });
  } : undefined;
  const transformFile = rest.transformFile ? rest.transformFile : defaultTransformFile;

  const beforeUpload = fileValidatorFactory(rest);// 上传前校验

  const handleChange = (info: UploadChangeParam<UploadFile<any>>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }

    if (info.file.status === 'done') {
      setLoading(false);
      if (info.file.response && info.file.response.success){
        logger.success('上传成功');
      } else {
        logger.fail('上传失败', info.file.response);
      }
    } else if (info.file.status === 'error') {
      setLoading(false);
      logger.fail('上传失败', info.file.response);
    };

    info.fileList = info.fileList.filter((file: any) => {
      if ( file.status === 'error' || 
        file.uploadPrevented || 
        (file.status === 'done' && file.response && !file.response.success)
      ) return false;

      return true;
    });

    onChange && onChange(info);
  };

  const uploadNode = children ? children : rest.listType == 'picture-card' ? (
    <Fragment>
      <IconContext.Provider value={{ className: 'chaos-upload-picture-icon' }}>
        <AiOutlinePlus />
      </IconContext.Provider>
      <div className="ant-upload-text">上传图片</div>
    </Fragment> 
  ) : (
    <Button type="default">
      <IconContext.Provider value={{ className: 'chaos-upload-icon' }}>
        {loading ? <AiOutlineLoading/> : <AiOutlineUpload />}
      </IconContext.Provider>
      文件上传
    </Button>
  );

  return (
    <Upload 
      disabled={max && fileList && fileList.length >= max ? true : false}
      {...rest} 
      fileList={fileList}
      accept={convetAccept(rest.accept)} 
      transformFile={transformFile}
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {uploadNode}
  </Upload>
  )
}

export default WrapFormItem(ChaosUpload, {
  defaultDetailType: 'tag',
  defaultFormItemProps: {
    valuePropName: "fileList",
    getValueFromEvent: (e: any) => {
      return Array.isArray(e) ? e : e && e.fileList;
    },
  }
});