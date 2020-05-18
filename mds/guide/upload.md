---
group:
  title: guide
---

# Upload

文件上传。

## features

* antd 功能。
* 集成文件类型、大小、上传文件数目校验。
* 上传失败文件不会显示在预览列表中。
* 上传图片按钮样式随 listType 切换。
* 集成添加水印。

## demos

### demo 1: 文件校验

```jsx
import React from 'react';
import { Form, Upload } from 'chaos-form-antd4';

export default () => {
  return (
    <Form labelCol={3}>
      <Upload name="avator" label="上传文件" accept="vedio" maxSize={2} />
    </Form>
  )
}
```

### demo 2: 上传数量

```jsx
import React from 'react';
import { Form, Upload } from 'chaos-form-antd4';

export default () => {
  return (
    <Form labelCol={3}>
      <Upload name="avator" label="上传图片" listType="picture-card" accept="image" max={2} />
    </Form>
  )
}
```

### demo 3: 详情

```jsx
import React from 'react';
import { Form, Upload } from 'chaos-form-antd4';

export default () => {
  return (
    <Form detail labelCol={3} initialValues={{avator: [{
      name: '图片', url: 'www.baidu.com', uid: 'www.baidu.com',
    }, {
      name: '图片1', url: 'www.baidu1.com', uid: 'www.baidu1.com',
    }]}}>
      <Upload name="avator" label="上传图片" renderDetailItem={(tag) => {
        return tag ? <a href={tag.url} target="_blank">{tag.name}</a> : null;
      }} />
    </Form>
  )
}
```

## properties

useFetch 参数。

| 属性 | 类型 | 默认值 | 意义 |
| :- | :-: | -: | -: |
| max | number | undefined | 最大上传数量 |
| maxSize | number | undefined | 最大上传兆数 |
| watermark | string | undefined | 水印文字 |