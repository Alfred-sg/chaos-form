---
group:
  title: guide
---

# Upload

文件上传。

## features

* 集成文件类型、大小、上传文件数目校验。
* 上传失败文件不会显示在预览列表中。
* 上传图片按钮样式随 listType 切换。
* 集成添加水印。

## demos

### demo 1: basic

```jsx
import React from 'react';
import { Upload } from 'chaos-form-antd4';

export default () => {
  return <Upload name="avator" label="上传文件" />
}
```
