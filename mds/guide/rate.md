---
group:
  title: guide
---

# Rate

评分。

## features

* antd 功能。

## demos

### demo 1: 基本功能

```jsx
import React from 'react';
import { Form, Rate } from 'chaos-form-antd4';

export default () => {
  return (
    <Form labelCol={3}>
      <Rate />
    </Form>
  )
}
```

### demo 2: 详情

```jsx
import React from 'react';
import { Form, Rate } from 'chaos-form-antd4';

export default () => {
  return (
    <Form detail labelCol={3} initialValues={{rate: 3}}>
      <Rate name="rate" />
    </Form>
  )
}
```
