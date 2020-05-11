import React from 'react';
import { Radio } from 'antd';
import FormItem from '../FormItem';

type Option = {
  label: string, 
  value: string
}

export default ({
  name,
  options,
  label,
  labelAddon,
  extra,
  required = true,
  initialValue,
  rules,
  itemProps,
  ...rest
}: {
  name: string,
  options: Option[],
  label: string,
  labelAddon?: React.ReactNode,
  extra?: React.ReactNode,
  required?: boolean,
  initialValue?: any;
  rules?: any,
  itemProps?: any,
  [key: string]: any,
}) => {
  return (
    <FormItem
      name={name}
      required={required}
      label={label}
      labelAddon={labelAddon}
      extra={extra}
      rules={[
        required ? {
          required: true,
          message: `请选择${label}`,
        } : undefined,
        ...(rules || [])
      ]}
    >
      <Radio.Group>
        {options.map(item => {
          return (
            <Radio
              key={item.value}
              value={item.value}
              {...(typeof itemProps == 'function' ? itemProps(item) : itemProps)}
            >
              {item.label}
            </Radio>
          );
        })}
      </Radio.Group>
    </FormItem>
  )
}