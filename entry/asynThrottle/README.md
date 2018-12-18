# asynThrottle 异步函数去抖

创建一个异步的节流函数，在 wait 秒内最多执行 func 一次的函数，并且手动回调完成

## NPM安装

```shell
npm install @zfowed/utils -S
```

## 方法

`asynThrottle(func, delay, [, isEnsure])`

Parameters:

- (required) `func`: 异步函数
- (required) `wait`: 等待时间
- (optional) `isEnsure`: 保证最后一次调用

Return:

- `{function}`: 节流处理的函数

## 基本用法

```javascript
import asynThrottle from '@zfowed/utils/dist/asynThrottle'
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
