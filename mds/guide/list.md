---
group:
  title: guide
---

# List

列表。

## features

* antd 功能。

## demos

### demo 1: 基本功能

```jsx
import React from 'react';
import { Form, List, Input, Checkbox } from 'chaos-form-antd4';

export default () => {
  const form = Form.useForm()[0];
  return (
    <Form labelCol={3} form={form}>
      <List name="list" label="列表">
        <Input name="name" label="姓名" />
        <Checkbox name="sex" label="性别" options={[{
          label: '男', value: 'male'
        },{
          label: '女', value: 'female'
        }]} />
      </List>
    </Form>
  )
}
```
