# `uniq` 数组去重

## NPM安装

```shell
npm install @zfowed/utils -S
```

> `uniq(array)`

创建一个去重后的array数组副本。使用了 SameValueZero 做等值比较。只有第一次出现的元素才会被保留。

参数

`array (Array)`: 要检查的数组。

返回

`(Array)`: 返回新的去重后的数组。

例子

```javascript
import uniq from '@zfowed/utils/esm/uniq'
```

```javascript
uniq([2, 1, 2]);
// => [2, 1]
```
