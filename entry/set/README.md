# `set` 设置 object对象中对应 `path` 属性路径上的值

## NPM安装

```shell
npm install @zfowed/utils -S
```

> `get(object, path, [defaultValue])`

根据 object对象的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。

参数

`object (Object)`: 要检索的对象。
`path (Array|string)`: 要获取属性的路径。
`value (*)`: 要设置的值。

例子

```javascript
import set from '@zfowed/utils/dist/set'
```

```javascript
var object = { 'a': [{ 'b': { 'c': 3 } }] };

set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c);
// => 4

set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z);
// => 5
```
