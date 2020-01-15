> # cloneDeep(value)

递归拷贝 value。（深贝拷）

## 参数 (params)

| 参数 | 类型 | 默认值 | 描述 |
| - | - | - | - |
| value | | | 要深拷贝的值 |

## 结果 (return)

`(*)`: 返回拷贝后的值

## 案例 (DEMO)

```javascript
import cloneDeep from '@zfowed/utils/cloneDeep'
```

```javascript
var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var deep = cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false
```
