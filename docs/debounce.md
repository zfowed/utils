> # debounce(func[, wait])

创建一个防抖动函数。

## 参数 (params)

| 参数 | 类型 | 默认值 | 描述 |
| - | - | - | - |
| func | Function | | 要防抖的函数 |
| wait | Number | 0 | 需要防抖的毫秒 |

## 结果 (return)

`(Function)`: 防抖处理的函数

## 案例 (DEMO)

```javascript
import debounce from '@zfowed/utils/debounce'
```

```javascript
const bar = function (param1, param2) {
  // 防抖
}

const baz = debounce(bar, 200)
baz('param1', 'param2')
```

