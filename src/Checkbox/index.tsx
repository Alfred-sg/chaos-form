import React from 'react';
import { Checkbox } from 'antd';
import { WrapFormItem } from '../FormItem';
import { CheckboxProps, CheckboxGroupProps } from 'antd/es/checkbox';

const ChaosCheckbox: React.FC<CheckboxGroupProps> = ({
  children,
  ...rest
}) => {
  return (
    <Checkbox.Group
      {...rest}
    >
      {children}
    </Checkbox.Group>
  )
}

export default WrapFormItem(ChaosCheckbox, {
  defaultDetailType: 'text',
});