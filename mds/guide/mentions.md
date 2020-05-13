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

### demo 2: 详情

```jsx
import React from 'react';
import { Form, Mentions } from 'chaos-form-antd4';

export default () => {
  return (
    <Form detail labelCol={3} initialValues={{author: 'author1'}}>
      <Mentions name="author" options={[{
        label: 'author1', value: 'author1'
      }]} />
    </Form>
  )
}
```
