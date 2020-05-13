---
group:
  title: guide
---

# AutoComplete

自动完成。

## features

* antd 功能。

## demos

### demo 1: 基本功能

```jsx
import React from 'react';
import { Form, AutoComplete } from 'chaos-form-antd4';

export default () => {
  return (
    <Form labelCol={3}>
      <AutoComplete options={[{
        label: 'author', value: 'author'
      }]} />
    </Form>
  )
}
```

### demo 2: 详情

```jsx
import React from 'react';
import { Form, AutoComplete } from 'chaos-form-antd4';

export default () => {
  return (
    <Form detail labelCol={3} initialValues={{author: 'author1'}}>
      <AutoComplete name='author' options={[{
        label: 'author1', value: 'author1'
      }]} />
    </Form>
  )
}
```
