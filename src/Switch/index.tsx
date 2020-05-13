import React from 'react';
import { Switch } from 'antd';
import { WrapFormItem } from '../FormItem';
import { SwitchProps } from 'antd/es/switch';

const ChaosSwitch: React.FC<SwitchProps> = (props) => {
  return (
    <Switch {...props}>
    </Switch>
  )
}

export default WrapFormItem(ChaosSwitch, {
  defaultDetailType: (props: SwitchProps) => {
    return <ChaosSwitch {...props} disabled />
  },
});