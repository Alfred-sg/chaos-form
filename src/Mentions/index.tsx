import React from 'react';
import { Mentions } from 'antd';
import { WrapFormItem } from '../FormItem';
import { ChaosMentionsProps } from './types';

const ChaosMentions: React.FC<ChaosMentionsProps> = ({
  options,
  children,
  ...rest
}) => {
  return (
    <Mentions {...rest}>
      {options ? options.map(option => {
        return <Mentions.Option key={option.value} value={option.value}>{option.label}</Mentions.Option>;
      }) : children}
    </Mentions>
  )
}

export default WrapFormItem(ChaosMentions);