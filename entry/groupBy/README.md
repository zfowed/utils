# groupBy 集合分组

> `groupBy(collection, iteratee)`

创建一个对象，key 是 iteratee 遍历 collection(集合) 中的每个元素返回的结果。 分组值的顺序是由他们出现在 collection(集合) 中的顺序确定的。每个键对应的值负责生成 key 的元素组成的数组。iteratee 调用 1 个参数： (value)。

参数

`collection (Array)`: 一个用来迭代的集合。
`iteratee (Function|string)`: 一个用来迭代的集合。

返回

`(Object)`: 返回一个组成聚合的对象。

例子

```javascript
groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }

groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }
```
