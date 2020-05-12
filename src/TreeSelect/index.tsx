import React from 'react';
import { TreeSelect } from 'antd';
import { WrapFormItem } from '../FormItem';
import { TreeSelectProps } from 'antd/es/tree-select';

const ChaosTreeSelect: React.FC<TreeSelectProps<any>> = ({
  children,
  ...rest
}) => {
  return (
    <TreeSelect {...rest}>
      {children}
    </TreeSelect>
  )
}

const FinalTreeSelect = WrapFormItem(ChaosTreeSelect);
FinalTreeSelect.TreeNode = TreeSelect.TreeNode;

export default FinalTreeSelect;