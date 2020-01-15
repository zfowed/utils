> # asynThrottle(func, wait, [, isEnsure])

创建一个异步的节流函数，在 wait 秒内最多执行 func 一次的函数，并且手动回调完成

## 参数 (params)

| 参数 | 类型 | 默认值 | 描述 |
| - | - | - | - |
| func | Function | | 要节流的函数 |
| wait | Number | 0 | 需要节流的毫秒 |
| isEnsure | Boolean | false | 最后一次异步函数必须执行 |

## 结果 (return)

`(Function)`: 节流处理的函数

## 案例 (DEMO)

```javascript
import asynThrottle from '@zfowed/utils/asynThrottle'
```

```javascript
/** 最后一个参数为结束任务，必须保证执行 */
const bar = function (param1, param2, next) {
  setTimeout(function () {
    console.log(param1, param2)
    return next()
  }, 200)
}

const baz = asynThrottle(bar, 200, true)
baz('param1', 'param2')
```
