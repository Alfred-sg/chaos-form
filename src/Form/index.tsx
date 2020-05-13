import React from 'react';
import { Form } from 'antd';
import FormContext from './Context';
import FormAttributesContext from './AttributesContext';
import FormItem from '../FormItem';
import { ChaosFormProps } from './types';
import './index.less';

const CustomForm = (props: ChaosFormProps) => {
  const {
    form,
    children,
    detail,
    ...rest
  } = props;
  
  return (
    <div className={detail ? 'chaos-form-detail' : undefined}>
      <Form form={form} {...rest}>
        <FormContext.Provider value={form}>
          <FormAttributesContext.Provider value={{ detail, ...rest }}>
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