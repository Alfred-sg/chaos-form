---
group:
  title: guide
---

# Select

下拉框。

## features

* antd 功能。

## demos

### demo 1: 基本功能

```jsx
import React from 'react';
import { Form, Select } from 'chaos-form-antd4';

export default () => {
  return (
    <Form labelCol={3}>
      <Select name="sex" label="性别" options={[{
        label: '男', value: 'male'
      },{
        label: '女', value: 'female'
      }]} />
    </Form>
  )
}
```
