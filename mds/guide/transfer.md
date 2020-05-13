---
group:
  title: guide
---

# Transfer

穿梭框。

## features

* antd 功能。

## demos

### demo 1: 基本功能

```jsx
import React from 'react';
import { Form, Transfer } from 'chaos-form-antd4';

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}

export default () => {
  return (
    <Form labelCol={3}>
      <Transfer name="time" label="时间" dataSource={mockData} render={item => item.title} />
    </Form>
  )
}
```

### demo 2: 详情

```jsx
import React from 'react';
import { Form, Transfer } from 'chaos-form-antd4';

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}

export default () => {
  return (
    <Form detail labelCol={3} initialValues={{time: ['content2', 'content3']}}>
      <Transfer name="time" label="时间" dataSource={mockData} render={item => item.title} />
    </Form>
  )
}
```
