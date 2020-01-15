> # uniqWith(array, comparator)

这个方法类似 uniq， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。 comparator 调用时会传入2个参数： (arrVal, othVal)。

## 参数 (params)

| 参数 | 类型 | 默认值 | 描述 |
| - | - | - | - |
| array | Array | | 要检查的数组 |
| comparator | Function | | 比较函数，调用每个元素 |

## 结果 (return)

`(Array)`: 返回新的去重后的数组。

## 案例 (DEMO)

```javascript
import uniqWith from '@zfowed/utils/esm/uniqWith'
```

```javascript
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];

uniqWith(objects, function (arrVal, othVal) {
  return arrVal === othVal
});
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
```
