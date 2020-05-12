---
group:
  title: guide
---

# Slider

滑动输入条。

## features

* antd 功能。

## demos

### demo 1: 基本功能

```jsx
import React from 'react';
import { Form, Slider } from 'chaos-form-antd4';

export default () => {
  return (
    <Form labelCol={3}>
      <Slider defaultValue={30} />
    </Form>
  )
}
```
