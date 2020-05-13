import React from 'react';
import { Transfer } from 'antd';
import { WrapFormItem } from '../FormItem';
import { ChaosTransferProps } from './types';

const ChaosTransfer: React.FC<ChaosTransferProps> = ({
  children,
  value,
  ...rest
}) => {
  return (
    <Transfer {...rest} targetKeys={value}>
      {children}
    </Transfer>
  )
}

export default WrapFormItem(ChaosTransfer, {
  defaultDetailType: 'text',
});