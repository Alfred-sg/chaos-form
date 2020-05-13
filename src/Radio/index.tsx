import React from 'react';
import { Radio } from 'antd';
import { WrapFormItem } from '../FormItem';
import { RadioProps } from 'antd/es/radio';

const ChaosRadio: React.FC<RadioProps> = (props) => {
  return (
    <Radio.Group
      {...props}
    >
    </Radio.Group>
  )
}

export default WrapFormItem(ChaosRadio, {
  defaultDetailType: 'text',
});