import React, { useContext } from 'react';
import classnames from 'classnames';
import { Form } from 'antd';
import { FormItemProps } from 'antd/es/form';
import PropsContext from './PropsContext';
import omit from 'omit.js';
import FormAttributesContext from '../Form/AttributesContext';
import { DetailComponents } from '../Detail';
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

const detailFormItemPropNames = [
  // antd 属性
  'colon', 'dependencies', 'getValueFromEvent', 'getValueProps', 
  'htmlFor', 'initialValue', 'noStyle', 'label', 'labelAlign', 'labelCol', 
  'name', 'normalize', 'required', 'valuePropName', 'wrapperCol',
  // antd 属性
  'formItemClassName', 
];

export const WrapFormItem = (
  Field: React.FC<any> | React.FunctionComponent<any> | React.Component<any>, 
  options?: {
    defaultDetailType?: string | React.FC<any> | React.FunctionComponent<any> | React.Component<any>;
    defaultFormItemProps?: { [key: string]: any };
    getFormItemPropsFromProps?: (props: FormItemWrapperProps) => { [key: string]: any };
  }
) => {
  const FormItemWrapper: React.FC<FormItemWrapperProps> = (props: FormItemWrapperProps) => {
    const formAttributesContext = useContext(FormAttributesContext);
    const isDetail = formAttributesContext.detail;
    const { children, detailType, ...rest } = props;
    const formItemProps = extract(rest, isDetail ? detailFormItemPropNames : formItemPropNames);
    const fieldProps = omit(rest, formItemPropNames);
    const formItemPropsFromProps = options && options.getFormItemPropsFromProps ? 
      options.getFormItemPropsFromProps(props) : undefined;
    const finalFormItemProps = {
      ...(options && options.defaultFormItemProps),
      ...formItemProps, 
      ...formItemPropsFromProps,
    };
    const DetailComponent = detailType ? DetailComponents[detailType] : 
      typeof (options && options.defaultDetailType) == 'string' ? 
        DetailComponents[options?.defaultDetailType as string] : 
      typeof (options && options.defaultDetailType) !== undefined ? 
        options?.defaultDetailType : undefined;

    return (
      <FormItem {...finalFormItemProps}>
        {isDetail && DetailComponent ? (
          // @ts-ignore
          <DetailComponent {...fieldProps} valuePropName={finalFormItemProps.valuePropName}>
            {children ? children : null}
          </DetailComponent>
          // @ts-ignore
        ) : (<Field {...fieldProps}>
          {children ? children : null}
        </Field>)}
      </FormItem>
    )
  };

  return FormItemWrapper;
}