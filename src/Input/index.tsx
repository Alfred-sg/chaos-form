import React, { useContext } from 'react';
import { Input } from 'antd';
import { getRulesFromProps } from './utils';
import { InputProps, TextAreaProps } from 'antd/es/input';
import FormItemPropsContext from '../FormItem/PropsContext';
import { WrapFormItem, FormItemWrapperProps } from '../FormItem';

const getExtraProps = (type?: string) => {
  const extraProps: { [key: string]: any } = {};

  switch(type){
    case 'chinaMobile':
      extraProps.type = 'phone';
      extraProps.maxLength = 11;
      break;
    case 'idCard':
      extraProps.maxLength = 18;
      break;
  }
  
  return extraProps;
}

const ChaosInput: React.FC<InputProps> = (props) => {
  const formItemPropsContext = useContext(FormItemPropsContext);
  const FieldComp = props.type === 'textarea' ? Input.TextArea : Input;
  const extraProps = getExtraProps(props.type);

  return (
    <Input
      placeholder={`请输入${formItemPropsContext.label}`}
      maxLength={30}
      {...extraProps}
      {...props}
    />
  )
}

const ChaosTextArea: React.FC<TextAreaProps> = (props) => {
  const formItemPropsContext = useContext(FormItemPropsContext);

  return (
    <Input.TextArea
      placeholder={`请输入${formItemPropsContext.label}`}
      maxLength={250}
      {...props}
    />
  )
}

const FinalChaosInput = WrapFormItem(ChaosInput, {
  defaultDetailType: 'text',
  getFormItemPropsFromProps: (props: FormItemWrapperProps) => {
    return {
      rules: getRulesFromProps(props),
      style: props.formItemStyle ? {
        ...props.formItemStyle,
        visibility: !props.hidden ? 'inherit' : 'hidden'
      } : props.hidden ? {
        display: 'none'
      } : undefined
    }
  }
});

// @ts-ignore
FinalChaosInput.Textarea = WrapFormItem(ChaosTextArea, {
  defaultDetailType: 'text',
})

export default FinalChaosInput;