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
