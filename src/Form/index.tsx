import React from 'react';
import { Form } from 'antd';
import FormContext from './Context';
import FormAttributesContext from './AttributesContext';
import FormItem from '../FormItem';
import { ChaosFormProps } from './types';
import './index.less';

const CustomForm = ({
  form,
  children,
  attrs,
  ...rest
}: ChaosFormProps) => {
  const isDetail = attrs && attrs.mode == 'detail';
  
  return (
    <div className={isDetail ? 'chaos-form-detail' : undefined}>
      <Form form={form} {...rest}>
        <FormContext.Provider value={form}>
          <FormAttributesContext.Provider value={attrs || {}}>
            {children}
          </FormAttributesContext.Provider>
        </FormContext.Provider>
      </Form>
    </div>
  )
};

CustomForm.Item = FormItem;
CustomForm.useForm = Form.useForm;

export default CustomForm;