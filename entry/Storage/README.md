# Storage 数据缓存

Storage.js 是用于数据缓存的javascript库。Storage.js支持在浏览器端中使用使用本地存储，或者使用内存，又或者可以自定义存储源。Storage.js没有依赖关系。

## 基本用法

```javascript
import Storage from '@zfowed/utils/dist/Storage'
```

```javascript

/* 实例 */
const storage = new Storage()

/* 赋值数据 */
storage.setItem('userName', '张三')

/* 获取数据 */
storage.getItem('userName') // "张三"
```

获取时数据设置默认值

```javascript
/* 获取 userName 数据时，当 userName 不存在时，返回 'guest' */
storage.getItem('userName') // undefined
storage.getItem('userName', 'guest') // "guest"
```

嵌套取值/赋值

```javascript
/* 对 userInfo 进行赋值 */
storage.setItem('userInfo', { id: 1, name: '高富帅', phone: '134****1234' })

/* 获取 userInfo */
storage.getItem('userInfo') // { id: 1, name: "高富帅", phone: "134****1234" }

/* 获取 userInfo.name */
storage.getItem('userInfo.name') // "高富帅"

/* 更新 userInfo.name */
storage.setItem('userInfo.name', '矮穷矬')
storage.getItem('userInfo.name') // "矮穷矬"

/* 支持数组嵌套 */
storage.setItem('list', [{ id: 0, title: '文章1' }， { id: 1, title: '文章2' }])
storage.getItem('list[0]') // { id: 0, title: "文章1" }
storage.setItem('list[0].title', '第一篇文章')
storage.getItem('list[0].title') // "第一篇文章"

/* 使用嵌套赋值，默认会创建对象 */
storage.getItem('object') // undefined
storage.setItem('object.key1.key2', '嵌套赋值')
storage.getItem('object') // { key1: { key2: "嵌套赋值" } }
```

> 调用 `storage.setItem(key, value)` 的时候，因为使用了函数去抖机制，延迟了 200 毫秒缓存数据，如需保证数据必须存入离线缓存中，可添加参数 `storage.setItem(key, value, { ensure: true})` 保证数据同步缓存.

## 添加业务代码

```javascript
// 可以实例多个源，设置业务代码进行区分
const storage1 = new Storage('BusinessCode_1')
const storage2 = new Storage('BusinessCode_2')

storage1.setItem('userName', '张三')
storage2.getItem('userName') // undefined
```

## 加密数据

默认使用 `JSON.stringify` `JSON.parse`

```javascript
// 加密数据
storage.encode = function (value) {
  try {
    return JSON.stringify(value)
  } catch (error) {
    throw new Error('编码失败')
  }
}
// 解密数据
storage.decode = function (value) {
  try {
    return JSON.parse(value)
  } catch (error) {
    return {}
  }
}
```

## 设置缓存源

默认使用 `localStorage`

```javascript
// 获取数据
storage.getStorage = function (code) {
  return localStorage.getItem(code)
}
// 赋值数据
storage.setStorage = function (code, value) {
  return localStorage.setItem(code, value)
}
```
