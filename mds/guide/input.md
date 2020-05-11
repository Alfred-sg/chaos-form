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
