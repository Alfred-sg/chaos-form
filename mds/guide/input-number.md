---
group:
  title: guide
---

# InputNumber

数字输入框。

## features

* antd 功能。

## demos

### demo 1: 基本功能

```jsx
import React from 'react';
import { Form, InputNumber } from 'chaos-form-antd4';

export default () => {
  return (
    <Form labelCol={3}>
      <InputNumber name="amount" label="金额" min={1} max={10} defaultValue={3} />
    </Form>
  )
}
```

### demo 2: 详情

```jsx
import React from 'react';
import { Form, InputNumber } from 'chaos-form-antd4';

export default () => {
  return (
    <Form detail labelCol={3} initialValues={{amount: '2020'}}>
      <InputNumber name="amount" label="金额" />
    </Form>
  )
}
```
