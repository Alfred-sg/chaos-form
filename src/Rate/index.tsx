import React from 'react';
import { Rate } from 'antd';
import { WrapFormItem } from '../FormItem';
import { RateProps } from 'antd/es/rate';

const ChaosRate: React.FC<RateProps> = (props) => {
  return (
    <Rate {...props}>
    </Rate>
  )
}

export default WrapFormItem(ChaosRate);