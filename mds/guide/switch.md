---
group:
  title: guide
---

# Switch

开关。

## features

* antd 功能。

## demos

### demo 1: 基本功能

```jsx
import React from 'react';
import { Form, Switch } from 'chaos-form-antd4';

export default () => {
  return (
    <Form labelCol={3}>
      <Switch checkedChildren="开" unCheckedChildren="关" />
    </Form>
  )
}
```

### demo 2: 详情

```jsx
import React from 'react';
import { Form, Switch } from 'chaos-form-antd4';

export default () => {
  return (
    <Form detail labelCol={3} initialValues={{switch: true}}>
      <Switch name="switch" checkedChildren="开" unCheckedChildren="关" />
    </Form>
  )
}
```
