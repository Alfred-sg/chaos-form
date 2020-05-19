---
group:
  title: guide
---

# SchemaForm

通过 json-schema 渲染表单。

## features

* 通过 json-schema 渲染表单。

## demos

### demo 1: 基本功能

```jsx
import React from 'react';
import { SchemaForm, Input } from 'chaos-form-antd4';

export default () => {
  return (
    <SchemaForm schema={[{
      fieldsSchema: [{
        fieldType: 'input', 
        name: 'name', 
        label: '姓名',
      }]
    }]}>
    </SchemaForm>
  )
}
```