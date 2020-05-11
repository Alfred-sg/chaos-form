import React from 'react';
import classnames from 'classnames';
import { Form } from 'antd';
import { FormItemProps } from 'antd/es/form';
import PropsContext from './PropsContext';
import omit from 'omit.js';
import { extract } from '../utils';
import './index.less';

const FormItem: React.FC<FormItemProps> = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;
  const formItemClassName = classnames({
    'chaos-form-item': true,
    [className as string]: !!className,
  });

  const rules = props.rules ? props.rules : [];
  if (props.required){
    rules.unshift({ 
      required: true,
      message: `${props.label || '字段'}不可缺失`,
    });
  };

  return (
    <PropsContext.Provider value={props}>
      <Form.Item 
        className={formItemClassName}
        required={true}
        validateFirst={true}
        {...rest}
        rules={rules}
      >
        {children}
      </Form.Item>
    </PropsContext.Provider>
  )
}

export default FormItem;

export interface FormItemWrapperProps extends FormItemProps {
  [key: string]: any;
};

const formItemPropNames = [
  // antd 属性
  'colon', 'dependencies', 'extra', 'getValueFromEvent', 'getValueProps', 'hasFeedback', 
  'help', 'htmlFor', 'initialValue', 'noStyle', 'label', 'labelAlign', 'labelCol', 
  'name', 'normalize', 'required', 'rules', 'shouldUpdate', 'trigger', 'validateFirst', 
  'validateStatus', 'validateTrigger', 'valuePropName', 'wrapperCol',
  // antd 属性
  'formItemClassName', 
];

export const WrapFormItem = (
  Field: React.FC | React.ComponentClass, 
  defaultFormItemProps?: { [key: string]: any },
  options?: {
    getFormItemPropsFromProps?: (props: FormItemWrapperProps) => FormItemProps,
  }
) => {
  const FormItemWrapper: React.FC<FormItemWrapperProps> = (props: FormItemWrapperProps) => {
    const { children, ...rest } = props;
    const formItemProps = extract(rest, formItemPropNames);
    const fieldProps = omit(rest, formItemPropNames);
    const formItemPropsFromProps = options && options.getFormItemPropsFromProps ? 
      options.getFormItemPropsFromProps(props) : undefined;

    console.log(defaultFormItemProps)
    return (
      <FormItem {...defaultFormItemProps} {...formItemProps} {...formItemPropsFromProps}>
        <Field {...fieldProps}>
          {children ? children : null}
        </Field>
      </FormItem>
    )
  };

  return FormItemWrapper;
}