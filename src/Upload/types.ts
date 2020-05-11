import { UploadProps } from 'antd/es/upload';

export interface ChaosUploadProps extends UploadProps {
  children?: React.ReactNode;
  max?: number;
  maxSize?: number;
  watermark?: string;
};