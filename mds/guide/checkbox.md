---
group:
  title: guide
---

# Checkbox

复选框。

## features

* antd 功能。

## demos

### demo 1: 基本功能

```jsx
import React from 'react';
import { Form, Checkbox } from 'chaos-form-antd4';

export default () => {
  return (
    <Form labelCol={3}>
      <Checkbox name="sex" label="性别" options={[{
        label: '男', value: 'male'
      },{
        label: '女', value: 'female'
      }]} />
    </Form>
  )
}
```
