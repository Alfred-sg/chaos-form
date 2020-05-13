import React from 'react';
import { Checkbox } from 'antd';
import { WrapFormItem } from '../FormItem';
import { CheckboxProps } from 'antd/es/checkbox';

const ChaosCheckbox: React.FC<CheckboxProps> = (props) => {
  return (
    <Checkbox.Group
      {...props}
    >
    </Checkbox.Group>
  )
}

export default WrapFormItem(ChaosCheckbox, {
  defaultDetailType: 'text',
});