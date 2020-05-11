import { SelectProps } from 'antd/es/select';

export interface ChaosSelectProps extends SelectProps {
  children?: React.ReactNode;
  max?: number;
  maxSize?: number;
  watermark?: string;
};