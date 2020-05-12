import React from 'react';
import { Transfer } from 'antd';
import { WrapFormItem } from '../FormItem';
import { TransferProps } from 'antd/es/transfer';

const ChaosTransfer: React.FC<TransferProps> = ({
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

export default WrapFormItem(ChaosTransfer);