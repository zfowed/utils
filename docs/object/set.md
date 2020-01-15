> # `set(object, path, value])`

设置 object对象中对应 path 属性路径上的值，如果path不存在，则创建。

## 参数 (params)

| 参数 | 类型 | 默认值 | 描述 |
| - | - | - | - |
| object | Object | | 要修改的对象 |
| path | Array, string | | 要设置的对象路径 |
| value | | | 要设置的值 |

## 结果 (return)

`(*)`: 值

## 案例 (DEMO)

```javascript
import get from '@zfowed/utils/get'
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
