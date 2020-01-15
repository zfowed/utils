# `uniqBy` 数组去重（对每个元素生成比较值进行比较）

## NPM安装

```shell
npm install @zfowed/utils -S
```

> `uniqBy(array)`

这个方法类似 uniq ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 调用时会传入一个参数：(value)。

参数

`array (Array)`: 要检查的数组。
`[iteratee] (Function|string)`: 迭代函数，调用每个元素。

返回

`(Array)`: 返回新的去重后的数组。

例子

```javascript
import uniqBy from '@zfowed/utils/esm/uniqBy'
```

```javascript
uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]
 
uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
```
