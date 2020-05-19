import React from 'react';
import { Radio } from 'antd';
import useOptions from '../hooks/useOptions';
import { WrapFormItem } from '../FormItem';
import { ChaosRadioProps } from './types';

const ChaosRadio: React.FC<ChaosRadioProps> = ({
  options: optionsProp,
  ...rest
}) => {
  const { options } = useOptions(optionsProp);
  
  return (
    <Radio.Group
      {...rest}
      options={options}
    >
    </Radio.Group>
  )
}

export default WrapFormItem(ChaosRadio, {
  defaultDetailType: 'text',
});