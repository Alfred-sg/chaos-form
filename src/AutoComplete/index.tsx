import React from 'react';
import { AutoComplete } from 'antd';
import { WrapFormItem } from '../FormItem';
import { AutoCompleteProps } from 'antd/es/auto-complete';

const ChaosAutoComplete: React.FC<AutoCompleteProps> = (props) => {
  return (
    <AutoComplete {...props}>
    </AutoComplete>
  )
}

export default WrapFormItem(ChaosAutoComplete, {
  defaultDetailType: 'text',
});