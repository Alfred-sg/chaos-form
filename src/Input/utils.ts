import { ChinaMobileValidator, TelephoneValidator, IdCardValidator } from './validator';
import { FormItemWrapperProps } from '../FormItem';

export const getRulesFromProps = (props: FormItemWrapperProps) => {
  let rules = [];

  if (props.required){
    rules.push({
      required: true,
      message: `请输入${props.label}`,
      whitespace: true, 
    });
  }

  switch(props.type){
    case 'chinaMobile':
      rules.push({
        validator: ChinaMobileValidator,
      });
      break;
    case 'telephone':
      rules.push({
        validator: TelephoneValidator,
      });
      break;
    case 'email':
      rules.push({
        pattern: /^[\.A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, 
        message: '邮箱格式不正确'
      });
      break;
    case 'idCard':
      rules.push({
        validator: IdCardValidator,
      })
  }

  if (props.rules) rules = [...rules, props.rules];
  return rules;
}