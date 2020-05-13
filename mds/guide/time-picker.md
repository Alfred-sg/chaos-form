---
group:
  title: guide
---

# TimePicker

时间选择框。

## features

* antd 功能。

## demos

### demo 1: 基本功能

```jsx
import React from 'react';
import { Form, TimePicker } from 'chaos-form-antd4';

export default () => {
  return (
    <Form labelCol={3}>
      <TimePicker name="time" label="时间" />
    </Form>
  )
}
```

### demo 1: 区间

```jsx
import React from 'react';
import { Form, TimePicker } from 'chaos-form-antd4';

export default () => {
  return (
    <Form labelCol={3}>
      <TimePicker.RangePicker name="range" label="时间" />
    </Form>
  )
}
```

### demo 2: 详情

```jsx
import React from 'react';
import { Form, TimePicker } from 'chaos-form-antd4';

export default () => {
  return (
    <Form detail labelCol={3} initialValues={{time: '20:54:00'}}>
      <TimePicker name="time" label="时间" />
    </Form>
  )
}
```

