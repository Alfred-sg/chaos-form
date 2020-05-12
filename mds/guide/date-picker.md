---
group:
  title: guide
---

# DatePicker

日期选择框。

## features

* antd 功能。

## demos

### demo 1: 基本功能

```jsx
import React from 'react';
import { Form, DatePicker } from 'chaos-form-antd4';

export default () => {
  return (
    <Form labelCol={3}>
      <DatePicker name="time" label="时间" />
    </Form>
  )
}
```

### demo 1: 区间

```jsx
import React from 'react';
import { Form, DatePicker } from 'chaos-form-antd4';

export default () => {
  return (
    <Form labelCol={3}>
      <DatePicker.RangePicker name="range" label="时间" />
    </Form>
  )
}
```

### demo 3: 年

```jsx
import React from 'react';
import { Form, DatePicker } from 'chaos-form-antd4';

export default () => {
  return (
    <Form labelCol={3}>
      <DatePicker.YearPicker name="range" label="时间" />
    </Form>
  )
}
```

### demo 4: 月

```jsx
import React from 'react';
import { Form, DatePicker } from 'chaos-form-antd4';

export default () => {
  return (
    <Form labelCol={3}>
      <DatePicker.MonthPicker name="range" label="时间" />
    </Form>
  )
}
```
