import React from 'react';
import { Slider } from 'antd';
import { WrapFormItem } from '../FormItem';

const ChaosSlider: React.FC<any> = (props) => {
  return (
    <Slider {...props}>
    </Slider>
  )
}

export default WrapFormItem(ChaosSlider, {
  defaultDetailType: (props: any) => {
    return <ChaosSlider {...props} disabled />
  },
});