import React from 'react';
import { Slider } from 'antd';
import { WrapFormItem } from '../FormItem';
import { SliderProps } from 'antd/es/slider';

const ChaosSlider: React.FC<SliderProps> = (props) => {
  return (
    <Slider {...props}>
    </Slider>
  )
}

export default WrapFormItem(ChaosSlider);