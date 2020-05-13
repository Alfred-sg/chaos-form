---
title: 首页
order: 1
hero:
  title: chaos-form-antd4
  desc: 简易的 antd4 表单适配器
  actions:
    - text: 指南
      link: /guide/11
---

## ✨ Features

* AutoComplete 自动完成。
* Cascader 级联下拉框。
* Checkbox 复选框。
* DatePicker 日期选择框。
* Input 输入框。
* InputNumber 数字输入框。
* Mentions 提及。
* Radio 单选框。
* Rate 评分。
* Select 下拉框。
* Slider 滑动输入条。
* Switch 开关。
* TimePicker 时间选择框。
* Transfer 穿梭框。
* TreeSelect 树形选择。
* Upload 文件上传。
* List 列表。

## 📦 Install

```
npm i chaos-form-antd4 --save
```

## 🔨 Usage

```
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

## 🖥 Development

```
$ git clone https://github.com/Alfred-sg/chaos-form-antd4
$ npm install
$ npm run docs
```
打开浏览器访问 http://127.0.0.1:8000。
