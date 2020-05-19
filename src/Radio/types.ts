import { RadioProps } from 'antd/es/radio';
import { Options } from '../hooks/useOptions';

export interface ChaosRadioProps extends RadioProps {
  options: Options;
};