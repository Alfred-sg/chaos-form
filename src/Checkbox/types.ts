import { CheckboxProps } from 'antd/es/checkbox';
import { Options } from '../hooks/useOptions';

export interface ChaosCheckboxProps extends CheckboxProps {
  options: Options;
};