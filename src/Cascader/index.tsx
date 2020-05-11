import React, { useContext } from 'react';
import { Cascader } from 'antd';
import { WrapFormItem } from '../FormItem';
import FormItemPropsContext from '../FormItem/PropsContext';
import { CascaderProps } from 'antd/es/cascader';

const ChaosCascader: React.FC<CascaderProps> = (props) => {
  const formItemPropsContext = useContext(FormItemPropsContext);

  return (
    <Cascader
      placeholder={`请选择${formItemPropsContext.label}`} 
      {...props}
    >
    </Cascader>
  )
}

export default WrapFormItem(ChaosCascader);