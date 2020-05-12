---
group:
  title: guide
---

# Mentions

提及。

## features

* antd 功能。

## demos

### demo 1: 基本功能

```jsx
import React from 'react';
import { Form, Mentions } from 'chaos-form-antd4';

export default () => {
  return (
    <Form labelCol={3}>
      <Mentions options={[{
        label: 'author', value: 'author'
      }]} />
    </Form>
  )
}
```
