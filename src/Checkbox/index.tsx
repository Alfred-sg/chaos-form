import React from 'react';
import { Checkbox } from 'antd';
import useOptions from '../hooks/useOptions';
import { WrapFormItem } from '../FormItem';
import { ChaosCheckboxProps } from './types';

const ChaosCheckbox: React.FC<ChaosCheckboxProps> = ({
  children,
  options: optionsProp,
  ...rest
}) => {
  const { options } = useOptions(optionsProp);
  
  return (
    // @ts-ignore
    <Checkbox.Group
      {...rest}
      options={options}
    >
      {children}
    </Checkbox.Group>
  )
}

export default WrapFormItem(ChaosCheckbox, {
  defaultDetailType: 'text',
});