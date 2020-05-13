---
group:
  title: guide
---

# Input

输入框。

## features

* antd 功能。

## demos

### demo 1: 基本功能

```jsx
import React from 'react';
import { Form, Input } from 'chaos-form-antd4';

export default () => {
  return (
    <Form labelCol={3}>
      <Input name="name" label="姓名" />
    </Form>
  )
}
```

### demo 2: 详情

```jsx
import React from 'react';
import { Form, Input } from 'chaos-form-antd4';

export default () => {
  return (
    <Form detail labelCol={3} initialValues={{description: '居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左居左'}}>
      <Input name="description" label="描述" />
    </Form>
  )
}
```
