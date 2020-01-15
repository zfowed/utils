# `cloneDeep` 深拷贝

## NPM安装

```shell
npm install @zfowed/utils -S
```

> `cloneDeep(value)`

这个方法类似 `clone`，除了它会递归拷贝 value。（愚人码头注：也叫深拷贝）。

参数

`value (*)`: 要深拷贝的值。

返回

`(*)`: 返回解析的值。

例子

```javascript
import cloneDeep from '@zfowed/utils/esm/cloneDeep'
```

```javascript
var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var deep = cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false
```
