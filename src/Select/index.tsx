import React, { useContext } from 'react';
import { Select } from 'antd';
import { WrapFormItem } from '../FormItem';
import useOptions from '../hooks/useOptions';
import FormItemPropsContext from '../FormItem/PropsContext';

const ChaosSelect: React.FC<any> = ({
  options: optionsProp,
  ...rest
}) => {
  const { options } = useOptions(optionsProp);
  const formItemPropsContext = useContext(FormItemPropsContext);

  return (
    <Select
      placeholder={`请选择${formItemPropsContext.label}`}
      {...rest}
    >
      {(options || []).map((option: any) => {
        return (
          <Select.Option key={option.value} value={option.value}>
            {option.label}
          </Select.Option>
        );
      })}
    </Select>
  )
}

export default WrapFormItem(ChaosSelect, {
  defaultDetailType: 'text',
});