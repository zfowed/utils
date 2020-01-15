
> # get(object, path[, defaultValue])

递归拷贝 value。（深贝拷）

## 参数 (params)

| 参数 | 类型 | 默认值 | 描述 |
| - | - | - | - |
| object | Object | | 要检索的对象 |
| path | Array, string | | 要获取属性的路径 |
| defaultValue | | | 如果解析值是 `undefined` ，这值会被返回 |

## 结果 (return)

`(*)`: 值

## 案例 (DEMO)

```javascript
import get from '@zfowed/utils/esm/get'
```

```javascript
var object = { 'a': [{ 'b': { 'c': 3 } }] };

get(object, 'a[0].b.c');
// => 3

get(object, ['a', '0', 'b', 'c']);
// => 3

get(object, 'a.b.c', 'default');
// => 'default'
```
