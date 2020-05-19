import React from 'react';

import { default as Form }  from '../Form';
import { ChaosFormProps } from '../Form/types';

import { default as AutoComplete }  from '../AutoComplete';
import { default as Cascader }  from '../Cascader';
import { default as Checkbox }  from '../Checkbox';
import { default as DatePicker }  from '../DatePicker';
import { default as Input }  from '../Input';
import { default as InputNumber }  from '../InputNumber';
import { default as Mentions }  from '../Mentions';
import { default as Radio }  from '../Radio';
import { default as Rate }  from '../Rate';
import { default as Select }  from '../Select';
import { default as Slider }  from '../Slider';
import { default as Switch }  from '../Switch';
import { default as Transfer }  from '../Transfer';
import { default as TreeSelect }  from '../TreeSelect';
import { default as TimePicker }  from '../TimePicker';
import { default as Upload }  from '../Upload';

import { default as List }  from '../List';
import { Fragment } from 'react';

export const FieldComponents: {
  [key: string]: React.FunctionComponent<any> | React.ClassicComponent<any>;
} = {
  'auto-complete': AutoComplete,
  'cascader': Cascader,
  'checkbox': Checkbox,
  'date-picker': DatePicker,
  'input': Input,
  'input-number': InputNumber,
  'metions': Mentions,
  'radio': Radio,
  'rate': Rate,
  'select': Select,
  'slider': Slider,
  'switch': Switch,
  'transfer': Transfer,
  'tree-select': TreeSelect,
  'time-picker': TimePicker,
  'upload': Upload,
  'list': List,
}

export const setFieldComponent = (
  type: string, 
  FieldComponent: React.FunctionComponent | React.ClassicComponent
) => {
  FieldComponents[type] = FieldComponent;
}

interface Schema extends ChaosFormProps {
  fieldsSchema: {
    fieldType: string;
    [key: string]: any;
  }[]
}

const SchemaForm = ({
  schema,
}: {
  schema: Schema[]
}) => {
  const forms = Form.useForm();

  return (
    <Fragment>
      {schema.map((form, index) => {
        const { fieldsSchema, ...formProps } = form;
        return (
          <Form {...formProps} form={forms[index]}>
            {fieldsSchema.map(field => {
              const { fieldType, ...fieldProps } = field;
              const FieldComponent = FieldComponents[fieldType];
              // @ts-ignore
              return <FieldComponent {...fieldProps} />
            })}
          </Form>
        );
      })}
    </Fragment>
  );
}

export default SchemaForm;