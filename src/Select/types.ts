import { SelectProps } from 'antd/es/select';

export interface ChaosSelectProps extends SelectProps<any> {
  children?: React.ReactNode;
  max?: number;
  maxSize?: number;
  watermark?: string;
};